import { createApp } from "../src/runtime-canvas/index";
import { getRootContainer } from "./game/index";
import App from "./App.vue";

console.warn = () => {};

createApp(App).mount(getRootContainer());
