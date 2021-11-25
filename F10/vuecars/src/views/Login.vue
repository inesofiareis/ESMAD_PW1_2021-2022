<template>
	<div>
		<p>LOGIN</p>
		<form @submit.prevent="onSubmit">
			<div>
				<label>Username</label>
				<br />
				<input v-model="form.username" type="text" />
			</div>
			<br />
			<div>
				<label>Password</label>
				<br />
				<input v-model="form.password" type="password" />
			</div>
			<br />
			<div>
				<button type="submit">Login</button>
			</div>
		</form>
		<p class="error" v-if="wrongCredentials">Credenciais erradas!</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					username: null,
					password: null,
				},
				username: 'admin',
				password: 'PW1',
				wrongCredentials: false,
			};
		},
		methods: {
			onSubmit() {
				// VERIFICAR SE O QUE FOI PREENCHIDO NO FORMULARIO É IGUAL AO QUE É SUPOSTO
				if (this.form.username == this.username && this.form.password == this.password) {
					// Se for igual guardamos a variável "isAuthenticated" na localStorage e dizemos ao router para ir a página da lista
					localStorage.setItem('isAuthenticated', true);
					this.$router.push({ name: 'BrandsList' });
				} else {
					// Se não for igual, damos o valor true a "wrongCredentials" para mostrar a mensagem de erro
					this.wrongCredentials = true;
				}
			},
		},
	};
</script>

<style>
	.error {
		color: red;
	}
</style>
