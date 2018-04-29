import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import InnerPage from '@/components/InnerPage'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/openbox',
			name: 'InnerPage',
			component: InnerPage
		},
		{
			path: '/article',
			name: 'Article',
			component: Article
		}
	],
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 0 }
	}
})