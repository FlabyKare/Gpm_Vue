export const allScripts = function () {
   window.addEventListener("load", () => {
      document.body.classList.add("preloader");
      setTimeout(() => {
         document.body.classList.remove("preloader");
      }, 250);
   });
   const script = document.createElement("script");
   script.src = "src/assets/js/allFunctions.js";
   script.defer = true;

   document.body.appendChild(script);
};
