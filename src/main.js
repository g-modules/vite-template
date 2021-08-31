import { createApp } from "vue";
import App from "./App.vue";
import Routes from "./router/Routes";
import "./assets/styles/index.styl";

createApp( App ).use( Routes ).mount( "#app" );
