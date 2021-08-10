import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import Px2rem from "postcss-px2rem";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [vue()],
    // css:{
    //   postcss: {
    //     plugins: [
    //       new Px2rem({
    //         remUnit: 192,
    //       }),
    //     ],
    //   },
    // }
});
