import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import globalComponents from "./components/global/index.js";
import "./assets/js/script.js";

const app = createApp(App);
app.use(globalComponents);
app.mount("#app");
