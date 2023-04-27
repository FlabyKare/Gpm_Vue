import Header from "../Header.vue";
import Main from "../Main.vue";
import Footer from "../Footer.vue";

import Ubutton from "./Ubutton.vue";

import Navigation from "./Navigation.vue";
import Menu from "./Menu.vue";
import Intro from "./Intro.vue";
import AppInfo from "./AppInfo.vue";
import SpruceSection from "./SpruceSection.vue";
import Preview from "./Preview.vue";
import Benefits from "./Benefits.vue";
import NFT from "./NFT.vue";
import Partner from "./Partner.vue";
import Roadmap from "./Roadmap.vue";
import Accordion from "./Accordion.vue";
import Form from "./Form.vue";
import Email from "./Email.vue";

const components = [
   { name: "Header", component: Header },
   { name: "Main", component: Main },
   { name: "Footer", component: Footer },

   { name: "Ubutton", component: Ubutton },

   { name: "Navigation", component: Navigation },
   { name: "Menu", component: Menu },
   { name: "Intro", component: Intro },
   { name: "AppInfo", component: AppInfo },
   { name: "SpruceSection", component: SpruceSection },
   { name: "Preview", component: Preview },
   { name: "Benefits", component: Benefits },
   { name: "NFT", component: NFT },
   { name: "Partner", component: Partner },
   { name: "Roadmap", component: Roadmap },
   { name: "Accordion", component: Accordion },
   { name: "Form", component: Form },
   { name: "Email", component: Email },
];

export default {
   install(app) {
      components.forEach(({ name, component }) => {
         app.component(name, component);
      });
   },
};
