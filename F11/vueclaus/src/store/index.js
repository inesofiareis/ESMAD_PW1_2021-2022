import Vue from 'vue';
import Vuex from 'vuex';

import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loggedUser: localStorage.loggedUser ? JSON.parse(localStorage.loggedUser) : null,
		users: localStorage.users
			? JSON.parse(localStorage.users)
			: [
					{
						username: 'painatal',
						password: 'painatal',
						location: 'laponia',
					},
			  ],
		gifts: localStorage.gifts ? JSON.parse(localStorage.gifts) : [],
	},
	mutations: {
		setLoggedUser(state, user) {
			state.loggedUser = user;
			localStorage.loggedUser = JSON.stringify(user);
		},
		addUser(state, user) {
			state.users.push(user);
			localStorage.users = JSON.stringify(state.users);
		},
		logout(state) {
			state.loggedUser = null;
			localStorage.removeItem('loggedUser');
			router.push({ name: 'Login' });
		},
		addGift(state, gift) {
			state.gifts.push(gift);
			localStorage.gifts = JSON.stringify(state.gifts);
		},
		chooseGift(state, giftName) {
			state.gifts.forEach((gift) => {
				if (gift.name == giftName) {
					gift.quantity--;
					gift.children.push(state.loggedUser.username);
					state.loggedUser.gifts++;
				}
			});
			localStorage.gifts = JSON.stringify(state.gifts);
			localStorage.loggedUser = JSON.stringify(state.loggedUser);
		},
	},
	getters: {
		checkUser: (state) => (username, password) => {
			return state.users.find((user) => user.username == username && user.password == password);
		},
		getLoggedUser: (state) => state.loggedUser,
		isUsernameAvailable: (state) => (username) => !state.users.some((user) => user.username == username),
		isGiftNameAvailable: (state) => (name) => !state.gifts.some((gift) => gift.name == name),
		getGifts: (state) => state.gifts,
	},
});
