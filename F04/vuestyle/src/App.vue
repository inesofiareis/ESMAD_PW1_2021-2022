<template>
	<div id="app">
		<School />
		<Teams />
	</div>
</template>

<script>
	import School from './components/School.vue';
	import Teams from './components/Teams.vue';

	export default {
		name: 'App',
		components: {
			School,
			Teams,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
