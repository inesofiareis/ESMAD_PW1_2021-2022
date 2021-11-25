import Vue from 'vue';
import VueRouter from 'vue-router';
import AddBrand from '../views/AddBrand.vue';
import Brand from '../views/Brand.vue';
import BrandsList from '../views/BrandsList.vue';
import Error from '../views/Error.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		// a rota colocada em "alias" é uma rota alternativa e que obtem o mesmo resultado que a colocada em "path"
		alias: '/list',
		name: 'BrandsList',
		component: BrandsList,
	},
	{
		path: '/add',
		name: 'AddBrand',
		component: AddBrand,
		// Antes de entrar nesta rota, é verificada a variavel "isAuthenticated", se estiver a true o utilizador segue para a rota, senão, segue para o login
		beforeEnter(to, from, next) {
			let isAuthenticated = localStorage.getItem('isAuthenticated');
			if (!isAuthenticated) {
				next({ name: 'Login' });
			} else next();
		},
	},
	{
		path: '/brand/:id',
		name: 'Brand',
		component: Brand,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		// Todos as rotas que não sejam as que estão acima definidas é lhes mostrada a página de erro
		path: '*',
		name: 'Error',
		component: Error,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
