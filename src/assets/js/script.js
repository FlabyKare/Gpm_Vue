export default function allScripts() {
   window.addEventListener("load", () => {
      document.body.classList.add("preloader");
      setTimeout(() => {
         document.body.classList.remove("preloader");
      }, 250);
   });
}
