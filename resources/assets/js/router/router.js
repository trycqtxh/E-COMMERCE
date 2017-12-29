'use strict'

import VueRouter from 'vue-router'
import routes from './routes.js'

const router = new VueRouter({
	routes: routes()
})

export default router