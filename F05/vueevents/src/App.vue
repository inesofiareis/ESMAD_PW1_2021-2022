<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<Button msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import Button from './components/Button.vue';

	export default {
		name: 'App',
		components: {
			Button,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
