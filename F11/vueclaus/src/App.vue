<template>
	<div id="app">
		<div v-if="!$store.getters.getLoggedUser" id="nav">
			<router-link to="/">Login</router-link> |
			<router-link to="/register">Registar</router-link>
		</div>
		<div v-else id="nav">
			<p>Sessão iniciada como: {{ $store.getters.getLoggedUser.username }}</p>
			<button @click="$store.commit('logout')">Terminar sessão</button>
		</div>
		<router-view />
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
