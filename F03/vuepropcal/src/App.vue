<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<Person />
	</div>
</template>

<script>
	import Person from './components/Person.vue';

	export default {
		name: 'App',
		components: {
			Person,
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
