import { createApp } from "vue";
import App from "./App.vue";
// import "./flexible";
import "./style/semantic.min.bak.css";
import "./style/font-awesome.min.css";
import "./style/common.css";
import "./style/home.css";
import "./style/masthead.css";
import { createI18n } from "vue-i18n";
import { router } from "./router";
import ko_KR from "./language.json";

let zh_CN = {};
Object.keys(ko_KR).forEach((key) => {
  zh_CN[key] = key;
});

const messages = {
  zh_CN: zh_CN,
  ko_KR: ko_KR,
};

const i18n = createI18n({
  locale: "ko_KR", // set locale
  fallbackLocale: "zh_CN", // set fallback locale
  messages, // set locale messages
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
