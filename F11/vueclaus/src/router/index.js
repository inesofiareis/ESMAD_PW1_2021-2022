import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Gifts from '../views/Gifts.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		alias: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
	},
	{
		path: '/gifts',
		name: 'Gifts',
		component: Gifts,
		meta: {
			requiresAuth: true,
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
		next({ name: 'Login' });
	} else {
		next();
	}
});

export default router;
