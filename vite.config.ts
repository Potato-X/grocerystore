import vue from "@vitejs/plugin-vue";
import { code, link, meta } from "md-powerpack";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import Markdown from "vite-plugin-md";
const pathResolve = (dir: string) => resolve(__dirname, dir);

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
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
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
      },
      // 静态资源分类打包
      output: {
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : "";
          // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
          // Otherwise, avoid them because they can refer to NTFS alternate data streams.
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
          );
        },
      },
    },
  },
});
