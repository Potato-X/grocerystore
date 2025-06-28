import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "normalize.css/normalize.css";
import Prism from "prismjs";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./style.css";
Prism.highlightAll();
let app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.mount("#app");
