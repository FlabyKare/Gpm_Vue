import NavComponent from "./NavComponent.vue";
import Header from "./Header.vue";
import Ubutton from "./Ubutton.vue";
import Menu from "./Menu.vue";
import Intro from "../Intro.vue";

const components = [
   { name: "NavComponent", component: NavComponent },
   { name: "Header", component: Header },
   { name: "Ubutton", component: Ubutton },
   { name: "Menu", component: Menu },
   { name: "Intro", component: Intro },
];

export default {
   install(app) {
      components.forEach(({ name, component }) => {
         app.component(name, component);
      });
   },
};
