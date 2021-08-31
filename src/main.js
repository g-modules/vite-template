import { createApp } from "vue";
import App from "./App.vue";
import Routes from "./router/Routes";

createApp( App ).use( Routes ).mount( "#app" );
