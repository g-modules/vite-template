import { createApp } from "vue";
import vueApp from "./App.vue";
import router from "./router";

createApp( vueApp ).use( router )
	.mount( "#app" );
