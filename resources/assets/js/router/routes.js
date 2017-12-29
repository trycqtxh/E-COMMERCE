'use strict'

export default function routes() {
	return [
		{ name: 'home', path: '/', component: function (resolve) {
			require(['./../components/user-page/index.vue'], resolve)
		}},
		{ name: 'detail-product', path: '/detail/product', component: function (resolve) {
			require(['./../components/user-page/detail-product.vue'], resolve)
		}},
		{ name: 'not-found', path: '*', component: function (resolve) {
			require(['./../components/user-page/not-found.vue'], resolve)
		}},
	]
}