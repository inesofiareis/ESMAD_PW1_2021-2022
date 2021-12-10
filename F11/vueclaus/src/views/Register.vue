<template>
	<div>
		<h1>Registar</h1>
		<form @submit.prevent="onSubmit">
			<label>Username</label>
			<br />
			<input type="text" v-model="form.username" required />
			<br />
			<br />
			<label>Password</label>
			<br />
			<input type="password" v-model="form.password" required />
			<br />
			<br />
			<label>Morada</label>
			<br />
			<input type="text" v-model="form.location" required />
			<br />
			<br />
			<input type="submit" value="Registar" />
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: '',
					password: '',
					gifts: 0,
					location: '',
				},
			};
		},
		methods: {
			onSubmit() {
				if (!this.$store.getters.isUsernameAvailable(this.form.username)) return alert('Username já registado!');

				this.$store.commit('addUser', this.form);
				alert('Registado com sucesso!');
				this.$router.push({ name: 'Login' });
			},
		},
	};
</script>

<style></style>
