import vue from "@vitejs/plugin-vue";
import { code, link, meta } from "md-powerpack";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router", "pinia"],
    }),
    Components({ resolvers: [ElementPlusResolver()] }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      builders: [code(), meta(), link()],
    }),
  ],
  resolve: {
    alias: {
      "@": pathResolve("./src"), //配置别名简称
    },
  },
});
