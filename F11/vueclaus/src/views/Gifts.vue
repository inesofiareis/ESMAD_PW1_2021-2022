<template>
	<div>
		<h1>Prendas</h1>
		<div v-if="loggedUser.username == 'painatal'">
			<h3>Adicionar prenda</h3>
			<form @submit.prevent="addGift">
				<label>Nome</label>
				<br />
				<input type="text" v-model="form.name" required />
				<br />
				<br />
				<label>Quantidade</label>
				<br />
				<input type="number" v-model="form.quantity" required />
				<br />
				<br />
				<input type="submit" value="Adicionar" />
			</form>
		</div>
		<table>
			<tr>
				<th>#</th>
				<th>Nome</th>
				<th>Quantidade</th>
				<th v-if="loggedUser.username == 'painatal'">Crianças</th>
				<th v-else>Opções</th>
			</tr>
			<tr v-for="(gift, index) in $store.getters.getGifts" :key="index">
				<td>{{ index + 1 }}</td>
				<td>{{ gift.name }}</td>
				<td>{{ gift.quantity }}</td>
				<td v-if="loggedUser.username == 'painatal'">{{ gift.children ? gift.children.join(',') : 'Sem crianças' }}</td>
				<td v-else>
					<button v-if="!gift.children.includes(loggedUser.username)" v-show="loggedUser.gifts == 0 && gift.quantity > 0" @click="onChooseGift(gift.name)">
						Escolher
					</button>
					<span v-else>Prenda escolhida</span>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: null,
					quantity: 0,
				},
				loggedUser: this.$store.getters.getLoggedUser,
			};
		},
		methods: {
			addGift() {
				if (!this.$store.getters.isGiftNameAvailable(this.form.name)) return alert('Prenda já existente!');

				this.$store.commit('addGift', { name: this.form.name, quantity: this.form.quantity, children: [] });
				alert('Prenda adicionada!');
				this.form.name = null;
				this.form.quantity = 0;
			},
			onChooseGift(giftName) {
				this.$store.commit('chooseGift', giftName);
			},
		},
	};
</script>

<style></style>
