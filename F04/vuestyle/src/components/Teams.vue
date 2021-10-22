<template>
	<div>
		<h1>TEAMS</h1>
		<div>
			<ul>
				<li v-for="(team, index) in filterByLocation" :key="index">Name: {{ team.name }} AND year: {{ team.year }}</li>
			</ul>
		</div>
		<div>
			<table>
				<thead>
					<td>#</td>
					<td>NAME</td>
					<td>YEAR</td>
				</thead>
				<tbody>
					<tr v-for="(team, index) in filterByLocation" :key="index">
						<td>{{ index }}</td>
						<td>{{ team.name }}</td>
						<td>{{ team.year }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<button @click="addTeam('Braga', 1923, 'Braga')">Adicionar equipa</button>
		<button @click="filterLocation = 'Lisboa'">Filtrar por Lisboa</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				teams: [
					{ name: 'benfica', year: 1910, location: 'Lisboa' },
					{ name: 'porto', year: 1912, location: 'Porto' },
					{ name: 'sporting', year: 1914, location: 'Lisboa' },
				],
				filterLocation: null,
			};
		},
		methods: {
			addTeam(name, year, location) {
				this.teams.push({ name, year, location });
			},
		},
		computed: {
			filterByLocation() {
				if (this.filterLocation) return this.teams.filter((team) => team.location == this.filterLocation);
				return this.teams;
			},
		},
	};
</script>

<style>
	table,
	th,
	td {
		border: 1px solid black;
		border-collapse: collapse;
	}
	td {
		padding: 15px;
	}
</style>
