<template>
	<div>
        <h1>SCHOOL</h1>
		<p :hidden="isHidden" :class="msgClasses">{{ msg }}</p>
		<!-- 1-USANDO UM ARRAY -->
		<!-- <button @click="addClass('red-text')">RED</button>
		<button @click="addClass('big-text')">BIG</button>
		<button @click="addClass('yellow-background')">YELLOW</button> -->
		
		<!-- 2-USANDO UM OBJECTO -->
		<button @click="toggleClass('red-text')">RED</button>
		<button @click="toggleClass('big-text')">BIG</button>
		<button @click="toggleClass('yellow-background')">YELLOW</button>
		
		<button @click="toogleHide">SHOW/HIDE</button>
		<br />
		<div v-if="filterSchools.length > 0">
			<h2>{{ filterSchools.length }} Escolas do IPP</h2>
			<ul>
				<li v-for="(school, index) in filterSchools" :key="index">{{ school }}</li>
			</ul>
		</div>
		<p v-else>SEM ESCOLAS</p>
		<button @click="addSchool('ESMAE')">Adicionar escola</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'A ESMAD é uma escola do IPP',
				schools: ['ESMAD', 'ISEP', 'ESE', 'ISCAP', 'ESTG', 'ESS', 'ESHT'],
				
				//1-USANDO UM ARRAY
				//msgClasses: [],
				
				//2-USANDO UM OBJECTO
				msgClasses: {
					'red-text': false,
					'big-text': false,
					'yellow-background': false,
				},
				
				isHidden: false,
			};
		},
		methods: {
		
			//1-USANDO UM ARRAY
			addClass(newClass) {
				this.msgClasses.push(newClass);
			},
			
			//2-USANDO UM OBJECTO
			toggleClass(newClass) {
				this.msgClasses[newClass] = !this.msgClasses[newClass];
			},
			
			toogleHide() {
				this.isHidden = !this.isHidden;
			},
			addSchool(school) {
				this.schools.push(school);
			},
		},
		computed: {
			filterSchools() {
				return this.schools.filter((school) => school.toLowerCase().startsWith('e'));
			},
		},
	};
</script>

<style>
	.red-text {
		color: red;
	}

	.big-text {
		font-size: 30pt;
	}

	.yellow-background {
		background-color: yellow;
	}
</style>
