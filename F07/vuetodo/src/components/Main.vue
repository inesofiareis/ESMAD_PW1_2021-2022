<template>
	<div>
		<dialog :open="isDialogOpen">
			<form v-on:submit.prevent="addTask">
				<label for="txtTask">DESCRIÇÃO: </label>
				<input type="text" id="txtTask" required v-model="task" />
				<br />
				<label for="txtTask">CATEGORIA: </label>
				<select v-model="category">
					<option value="pessoal">PESSOAL</option>
					<option value="professional">PROFESSIONAL</option>
				</select>
				<br />
				<label for="">PRIORIDADE: </label>
				<input v-model.number="priority" type="number" min="1" max="5" />
				<br />
				<input type="submit" value="ADICIONAR" />
			</form>
		</dialog>

		<br />

		<button @click="toggleModal">ADICIONAR</button>
		<button @click="removeAllTasks">REMOVER</button>
		<button @click="sortTasks">ORDERNAR</button>
		<br />
		<h4>FILTRAR</h4>
		<div>
			<input v-model="filter.description" type="text" />
			<select v-model="filter.category">
				<option value="">TODAS</option>
				<option value="pessoal">PESSOAL</option>
				<option value="professional">PROFESSIONAL</option>
			</select>
		</div>

		<br />
		<div v-if="tasks.length == 0">SEM TAREFAS</div>
		<div v-else>
			<br />
			<table>
				<tr>
					<th>DESCRIÇÃO</th>
					<th>CATEGORIA</th>
					<th>PRIORIDADE</th>
					<th>AÇÕES</th>
				</tr>
				<tr v-for="(task, i) in filterTasks" :key="i">
					<td :style="{ color: task.done ? 'green' : 'red' }">{{ task.description }}</td>
					<td>{{ task.category }}</td>
					<td>
						<button v-if="!task.done" @click="decreasePriority(i)">-</button>
						<span> {{ task.priority }} </span>
						<button v-if="!task.done" @click="increasePriority(i)">+</button>
					</td>
					<td><button v-if="!task.done" v-on:click="doTask(i)">REALIZAR</button></td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isDialogOpen: false,
				task: '',
				category: 'pessoal',
				filter: {
					category: '',
					description: '',
				},
				priority: 3,
				tasks: [],
				sort: 'priority',
			};
		},
		created() {
			// Get tasks from localStorage
			if (localStorage.getItem('tasks')) {
				this.tasks = JSON.parse(localStorage.getItem('tasks'));
			}
		},
		updated() {
			this.saveStorage();
		},
		methods: {
			// Save tasks in the localstorage
			saveStorage() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			},
			// Add a task (validates duplicated names)
			addTask() {
				if (this.tasks.some((task) => task.description === this.task)) {
					alert('Tarefa ja existente!');
				} else {
					const newTask = { description: this.task, category: this.category, done: false, priority: this.priority };
					this.tasks.push(newTask);
					this.sortTasks();
					this.toggleModal();
				}
			},
			removeAllTasks() {
				this.tasks = [];
			},
			// do task
			doTask(index) {
				this.tasks[index].done = true;
				this.sortTasks();
			},
			decreasePriority(index) {
				if (this.tasks[index].priority > 1) this.tasks[index].priority--;
			},
			increasePriority(index) {
				if (this.tasks[index].priority < 5) this.tasks[index].priority++;
			},
			sortTasks() {
				if (this.sort == 'priority') {
					this.tasks.sort((a, b) => {
						if (a.priority == b.priority) return 0;
						else if (a.priority > b.priority) return 1;
						else return -1;
					});
					this.sort = 'done';
				} else {
					this.tasks.sort((a, b) => {
						if (a.done == b.done) return 0;
						else if (a.done == true) return 1;
						else return -1;
					});
					this.sort = 'priority';
				}
			},
			toggleModal() {
				this.isDialogOpen = !this.isDialogOpen;
			},
		},
		computed: {
			// Filter tasks by category
			filterTasks() {
				return this.tasks.filter(
					(task) => task.description.indexOf(this.filter.description) != -1 && (task.category === this.filter.category || this.filter.category === '')
				);
			},
		},
	};
</script>

<style></style>
