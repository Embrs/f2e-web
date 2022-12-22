import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import { ProvideGsap } from "@/plugin/gsap";

import "@/style/main.css";
import "@/style/rwd.scss";

const app = createApp(App);
app.use(createPinia());
app.use(router);
ProvideGsap(app);
app.mount("#app");
