<template>
	<div>
		<h1>Login</h1>
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
			<input type="submit" value="Login" />
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				form: {
					username: '',
					password: '',
				},
			};
		},
		methods: {
			onSubmit() {
				let user = this.$store.getters.checkUser(this.form.username, this.form.password);

				if (!user) return alert('Credenciais inválidas!');

				this.$store.commit('setLoggedUser', user);

				this.$router.push({ name: 'Gifts' });
			},
		},
	};
</script>

<style></style>
