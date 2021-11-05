<template>
	<div>
		<p>MAIN</p>

		<form @submit.prevent="onSubmit">
			<label for="">Nome:</label><br />
			<input required v-model.trim="toAdd.name" type="text" />
			<br />
			<br />
			<label for="">Categoria:</label><br />
			<select required v-model="toAdd.category">
				<option v-for="category in categories" :key="category">{{ category }}</option>
			</select>
			<br />
			<br />
			<label for="">Pontuação:</label><br />
			<input required v-model.number="toAdd.pontuation" type="number" min="1" max="10" />
			<br />
			<input type="submit" />
		</form>
		<br />

		<table>
			<thead>
				<th>Nome</th>
				<th>Categoria</th>
				<th>Pontuação</th>
			</thead>
			<tbody>
				<tr v-for="serie in series" :key="serie.name">
					<td>{{ serie.name }}</td>
					<td>{{ serie.category }}</td>
					<td>{{ serie.pontuation }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				toAdd: {
					name: '',
					category: '',
					pontuation: 1,
				},
				categories: ['romance', 'comédia', 'terror', 'mistério'],
				series: [],
			};
		},
		methods: {
			onSubmit() {
				this.series.push({
					name: this.toAdd.name,
					category: this.toAdd.category,
					pontuation: this.toAdd.pontuation,
				});

                this.sortSeries();
                
			},
            sortSeries() {
                this.series.sort(function (a, b) {
					if (a.pontuation > b.pontuation) return -1;
					else if (a.pontuation < b.pontuation) return 1;
					else return 0;
				});
            }
		}
	};
</script>

<style></style>
