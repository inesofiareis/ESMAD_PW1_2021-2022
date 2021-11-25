<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Lista</router-link> |
			<router-link to="/add">Adicionar</router-link>
		</div>
		<router-view />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				brands: [
					{
						id: 1,
						name: 'Opel',
						image: 'https://logosmarcas.net/wp-content/uploads/2021/04/Opel-Logo.png',
						year: 1990,
					},
					{
						id: 2,
						name: 'Mercedes',
						image: 'https://media.slbenfica.pt/-/media/benficadp/shop/members/redpower/partners/mercedesbenz/logotipo-mercedes-1.png?h=260&w=350&v=636850516300000000&hash=8D4A02AB182D38EE456DFAAF73C05444',
						year: 1991,
					},
					{
						id: 3,
						name: 'Ford',
						image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png',
						year: 1992,
					},
				],
			};
		},
		created() {
			// ADICIONAR AS BRANDS À LOCALSTORAGE, SE JA EXISTIREM BRANDS NA LOCALSTORAGE ENTÃO USAR ESSAS
			if (!localStorage.getItem('brands')) localStorage.setItem('brands', JSON.stringify(this.brands));
			else this.brands = JSON.parse(localStorage.getItem('brands'));
		},
	};
</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
