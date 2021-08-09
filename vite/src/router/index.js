import { createWebHistory, createRouter } from "vue-router";

// views
const main = () => import( "~/views/view-main.vue" );

// routes
const routes = [{
	"path": "/",
	"name": "Main",
	"component": main
}, {
	"path": "/:pathMatch(.*)*",
	"redirect": { "name": "Main" }
}];

export default createRouter({
	"history": createWebHistory(),
	routes
});
