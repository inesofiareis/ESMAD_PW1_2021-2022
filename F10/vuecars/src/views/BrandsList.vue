<template>
	<div>
		<p>Lista de marcas</p>
		<table v-if="brands.length > 0">
			<thead>
				<th>Nome</th>
				<th>Ano</th>
				<th>Link</th>
			</thead>
			<tbody>
				<tr v-for="brand in brands" :key="brand.id">
					<td>{{ brand.name }}</td>
					<td>{{ brand.year }}</td>
					<td>
                        <!-- Quando o utilizador clica no botão é encaminhado para a página da marca e é lhe mostrada a marca com o ID que passamos no parametro -->
						<button @click="$router.push({ name: 'Brand', params: { id: brand.id } })">Abrir</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div v-else>
			<p>Não existem marcas</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				brands: [],
			};
		},
		created() {
			if (localStorage.getItem('brands')) this.brands = JSON.parse(localStorage.getItem('brands'));
		},
	};
</script>

<style></style>
