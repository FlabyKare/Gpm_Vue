export default function allScripts() {
   window.addEventListener("load", () => {
      document.body.classList.add("preloader");
      setTimeout(() => {
         document.body.classList.remove("preloader");
      }, 250);
   });

   //! Плавная прогрузка Элементов
   function onEntry(entries, observer) {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            entry.target.classList.add("element-show");
            observer.unobserve(entry.target);
         }
      });
   }

   let observer = new IntersectionObserver(onEntry, {
      threshold: 0.25,
      rootMargin: "-5px 0px",
   });
   document.querySelectorAll(".element-animation").forEach((elm) => {
      observer.observe(elm);
   });
}
