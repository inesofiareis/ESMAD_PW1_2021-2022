<template>
	<div>
		<dialog :open="isDialogOpen">
			<form @submit.prevent="addTask">
				<label for="description">Descrição</label>
				<input type="text" id="description" v-model="form.description" />
				<br />
				<label for="category">CATEGORIA</label>
				<select v-model="form.category" id="category">
					<option value="pessoal">PESSOAL</option>
					<option value="profissional">PROFISSIONAL</option>
				</select>
				<br />
				<label for="priority">PRIORIDADE</label>
				<input v-model="form.priority" id="priority" type="number" min="1" max="5" />
				<br />
				<button type="submit">ADICIONAR</button>
			</form>
		</dialog>

		<button @click="toggleDialog">ADICIONAR</button>
		<button @click="removeAllTasks">REMOVER</button>
		<button @click="changeSort">ORDENAR</button>
		<br />
		<br />
		<input type="text" v-model="filter.description" />
		<select v-model="filter.category">
			<option value="">TODAS</option>
			<option value="pessoal">PESSOAL</option>
			<option value="profissional">PROFISSIONAL</option>
		</select>

		<table>
			<thead>
				<th>Descrição</th>
				<th>Categoria</th>
				<th>Prioridade</th>
				<th>Ação</th>
			</thead>
			<tbody>
				<tr v-for="(task, index) in filterTasks" :key="index">
					<td :style="{ color: task.isDone ? 'green' : 'red' }">{{ task.description }}</td>
					<td>{{ task.category }}</td>
					<td>
						<button @click="decreasePriority(index)">-</button>
						<span> {{ task.priority }} </span>
						<button @click="increasePriority(index)">+</button>
					</td>
					<td><button @click="doTask(index)">REALIZAR</button></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isDialogOpen: false,
				sortToggle: 'priority',
				filter: {
					description: '',
					category: '',
				},
				form: {
					description: '',
					category: 'pessoal',
					priority: 3,
				},
				tasks: [
					{
						description: 'Descrição 1',
						category: 'pessoal',
						priority: 1,
						isDone: true,
					},
					{
						description: 'Descrição 2',
						category: 'pessoal',
						priority: 1,
						isDone: false,
					},
					{
						description: 'Descrição 3',
						category: 'pessoal',
						priority: 1,
						isDone: true,
					},
					{
						description: 'Descrição 4',
						category: 'pessoal',
						priority: 1,
						isDone: false,
					},
				],
			};
		},
		created() {
			this.sortTasks();

			if (localStorage.getItem('tasks')) this.tasks = JSON.parse(localStorage.getItem('tasks'));
		},
		// 1 maneira, má para performance, esta sempre a gravar, ate quando so alteramos os filtros
		// updated() {
		// 	localStorage.setItem('tasks', JSON.stringify(this.tasks));
		// },
		// 2 maneira, boa para performance, grava só quando alteramos as tasks
		watch: {
			tasks: {
				handler: function () {
					localStorage.setItem('tasks', JSON.stringify(this.tasks));
				},
				deep: true,
			},
		},
		methods: {
			toggleDialog() {
				this.isDialogOpen = !this.isDialogOpen;
			},
			decreasePriority(index) {
				if (this.tasks[index].priority > 1) this.tasks[index].priority--;
				this.sortTasks();
			},
			increasePriority(index) {
				if (this.tasks[index].priority < 5) this.tasks[index].priority++;
				this.sortTasks();
			},
			doTask(index) {
				this.tasks[index].isDone = true;
			},
			changeSort() {
				this.sortToggle = this.sortToggle == 'priority' ? 'isDone' : 'priority';
				this.sortTasks();
			},
			sortTasks() {
				if (this.sortToggle == 'priority') {
					this.tasks.sort((a, b) => {
						if (a.priority == b.priority) return 0;
						else if (a.priority < b.priority) return 1;
						else return -1;
					});
				} else {
					this.tasks.sort((a, b) => {
						if (a.isDone == b.isDone) return 0;
						else if (a.isDone == true) return 1;
						else return -1;
					});
				}
			},
			addTask() {
				this.tasks.push({
					description: this.form.description,
					category: this.form.category,
					priority: this.form.priority,
					isDone: false,
				});

				this.toggleDialog();
			},
			removeAllTasks() {
				this.tasks = [];
			},
		},
		computed: {
			filterTasks() {
				return this.tasks.filter(
					(task) => task.description.indexOf(this.filter.description) != -1 && (task.category == this.filter.category || this.filter.category == '')
				);
			},
		},
	};
</script>

<style></style>
