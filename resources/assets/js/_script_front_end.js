require('./bootstrap');
window.Vue = require('vue');

import router from './router/router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

var _http = axios.create({
	baseURL: `/api/`
})
Vue.prototype.$http = _http
Vue.config.productionTip = false


const app = new Vue({
    el: '#vue-wrapper',
    template: '<App-Vue></App-Vue>',
    components: {
    	'App-Vue': function (resolve) {
    		require(['./components/App'], resolve)
    	}
    },
    router
});
