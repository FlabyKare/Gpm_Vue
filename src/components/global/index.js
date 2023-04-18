import Header from "../Header.vue";
import Main from "../Main.vue";

import Ubutton from "./Ubutton.vue";

import Navigation from "./Navigation.vue";
import Menu from "./Menu.vue";
import Intro from "./Intro.vue";
import AppInfo from "./AppInfo.vue";
import SpruceSection from "./SpruceSection.vue";

const components = [
   { name: "Header", component: Header },
   { name: "Main", component: Main },

   { name: "Ubutton", component: Ubutton },

   { name: "Navigation", component: Navigation },
   { name: "Menu", component: Menu },
   { name: "Intro", component: Intro },
   { name: "AppInfo", component: AppInfo },
   { name: "SpruceSection", component: SpruceSection },
];

export default {
   install(app) {
      components.forEach(({ name, component }) => {
         app.component(name, component);
      });
   },
};
