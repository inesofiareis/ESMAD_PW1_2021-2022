<template>
	<div>
		<p>Adicionar marca</p>
		<form @submit.prevent="onSubmit">
			<div>
				<label for="">Nome</label>
				<br />
				<input v-model="form.name" type="text" />
			</div>
			<br />
			<div>
				<label for="">Imagem</label>
				<br />
				<input v-model="form.image" type="url" />
			</div>
			<br />
			<div>
				<label for="">Ano</label>
				<br />
				<input v-model="form.year" type="number" />
			</div>
			<br />
			<div>
				<button type="submit">Adicionar</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: null,
					image: null,
					year: null,
				},
			};
		},
		methods: {
			onSubmit() {
				let brands = [];
				if (localStorage.getItem('brands')) brands = JSON.parse(localStorage.getItem('brands'));

				brands.push({
                    // Obter o id da ultima marca que está no array e somar +1
					id: brands.length ? brands[brands.length - 1].id + 1 : 1,
					name: this.form.name,
					image: this.form.image,
					year: this.form.year,
				});

				localStorage.setItem('brands', JSON.stringify(brands));

				alert('Marca adicionada');
			},
		},
	};
</script>

<style></style>
