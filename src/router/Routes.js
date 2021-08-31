import { createWebHistory, createRouter } from "vue-router";

// views
const ViewStart = () => import( "~/views/ViewStart.vue" );

// routes
const routes = [{
	"path": "/",
	"name": "ViewStart",
	"component": ViewStart
}, {
	"path": "/:pathMatch(.*)*",
	"redirect": { "name": "ViewStart" }
}];

export default createRouter({
	"history": createWebHistory(),
	routes
});
