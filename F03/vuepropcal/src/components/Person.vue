<template>
	<div>
		{{ person }}
		{{ printDataPerson(person.firstName, person.age) }}
		{{ printDataPersonComputed }}
		{{ printDataPerson(person.firstName, person.age) }}
		{{ printDataPersonComputed }}
		<br />
		{{ getFullNameComputed }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				person: {
					firstName: 'Rui',
					lastName: 'Silva',
					age: 23,
				},
			};
		},
		created() {
			console.log('EVENTO: CREATED');
		},
		mounted() {
			console.log('EVENTO: MOUNTED');
		},
		updated() {
			console.log('EVENTO: UPDATED');
		},
		watch: {
			'person.age'(newValue, oldValue) {
				console.log(`Idade alterada de ${oldValue} para ${newValue}`);
			},
		},
		methods: {
			printDataPerson(firstName, age) {
				console.log(`METHOD--> NOME: ${firstName} e IDADE: ${age}`);
			},
		},
		computed: {
			printDataPersonComputed() {
				console.log(`COMPUTED--> NOME: ${this.person.firstName} e IDADE: ${this.person.age}`);
				return true;
			},
			getFullNameComputed() {
				return this.person.firstName + ' ' + this.person.lastName;
			},
		},
	};
</script>

<style lang="scss" scoped></style>
