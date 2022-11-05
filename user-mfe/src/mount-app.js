import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";

export const mount = (el) => {
    const app = createApp(App);
    app.mount(el);
};
