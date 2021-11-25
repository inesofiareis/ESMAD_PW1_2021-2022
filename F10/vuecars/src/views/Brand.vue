<template>
	<div>
		<p>Marca</p>
        <!-- usamos $router.go(-1) para que o utilizador vá para a página que estava anteriormente -->
		<button @click="$router.go(-1)">Voltar</button>
        
		<div v-if="brand">
			<img :src="brand.image" alt="" />
			<h4>{{ brand.name }}</h4>
			<p>{{ brand.year }}</p>
		</div>
		<div v-else>
			<p>Não foi encontrada nenhuma marca com o ID {{ $route.params.id }}</p>
		</div>
	
    </div>
</template>

<script>
	export default {
		data() {
			return {
				brand: null,
			};
		},
		created() {
			let brands = [];
			if (localStorage.getItem('brands')) brands = JSON.parse(localStorage.getItem('brands'));

            // Procurar nas brands a brand com o id igual ao id passado na rota
			this.brand = brands.find((brand) => brand.id == this.$route.params.id);
		},
	};
</script>

<style>
	img {
		max-width: 150px;
	}
</style>
