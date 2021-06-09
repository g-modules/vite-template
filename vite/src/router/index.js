import { createWebHistory, createRouter } from "vue-router"

// Views
const main = () => import('~/views/view-main.vue')

// Routes
const routes = [
	{
		path: "/",
		name: "Main",
		component: main
	}, {
		path: "/:pathMatch(.*)*",
		redirect: { name: "Main" },
	}
]
export default createRouter({
	history: createWebHistory(),
	routes
})