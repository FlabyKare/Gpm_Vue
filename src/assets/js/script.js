export default function allScripts() {
   //! Preloader

   window.addEventListener("load", function () {
      document.body.classList.add("preloader");
      setTimeout(function () {
         document.body.classList.remove("preloader");
      }, 500);
   });

   //! Плавная прогрузка Элементов

   function onEntry(entry) {
      entry.forEach((change) => {
         if (change.isIntersecting) {
            change.target.classList.add("element-show");
         }
      });
   }

   let options = {
      threshold: [0.35],
   };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll(".element-animation");

   elements.forEach((elm) => {
      observer.observe(elm);
   });

   //! Плавный переход по "Якорным ссылкам"

   document.querySelectorAll("a.scrollto").forEach((link) => {
      link.addEventListener("click", function (event) {
         event.preventDefault();
         let elementClick = this.getAttribute("href");
         let destination = document.querySelector(elementClick).offsetTop;
         window.scrollTo({
            top: destination,
            behavior: "smooth",
         });
      });
   });

   //! Выбор языка

   const countries = document.querySelectorAll(".language");
   const showLanguage = document.querySelector(".show_language");
   const LanguageDropDownMenu = document.querySelector(".dropdown_menu");

   countries.forEach((country) => {
      country.addEventListener("click", function () {
         showLanguage.src = country.src;
         callLanguageMenu();
      });
   });

   function callLanguageMenu() {
      LanguageDropDownMenu.classList.toggle("dropdown_menuActive");
      productsDropdown.classList.remove("activeDropDown");
   }

   function callProductseMenu() {
      productsDropdown.classList.toggle("activeDropDown");
      LanguageDropDownMenu.classList.remove("dropdown_menuActive");
   }

   //! Products DropDown

   const productsLink = document.querySelector(".products_dropdown_link");
   const productsDropdown = document.querySelector(".products_dropdown");

   productsLink.addEventListener("click", () => {
      callProductseMenu();
   });

   //! Кнопка переключения темы

   const themeChanger = document.querySelectorAll(".theme_button");
   const whiteBlocks = document.querySelectorAll(".white_mode_color");

   themeChanger.forEach((themeChangerBtn) => {
      themeChangerBtn.addEventListener("click", function () {
         themeChangerBtn.classList.toggle("dark");
         themeChangerBtn.classList.toggle("white");

         whiteBlocks.forEach((whiteBlockItem) => {
            whiteBlockItem.classList.toggle("active");
         });
      });
   });

   //! Меню
   const burgerMenu = document.querySelector(".burger-menu");
   const menuList = document.querySelector(".menu-wrapper");

   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("open");
      menuList.classList.toggle("show");
      document.body.classList.toggle("menu_opened");
   });

   //! Выпадающий список в меню
   const menuDropDown = document.querySelector(".menu_dropDown");
   const menuDropDownList = document.querySelector(".menu_dropDown_list");
   const menuListItemArrow = document.querySelector(".menu_arrow");
   menuDropDown.addEventListener("click", () => {
      menuDropDownList.classList.toggle("show");
      menuDropDown.classList.toggle("show");
   });

   function randomize() {
      const box = document.querySelector(".box");
      const randomX = Math.floor(Math.random() * 100); // рандомное число в диапазоне от -100 до 100
      const randomY = Math.floor(Math.random() * 100); // рандомное число в диапазоне от -100 до 100
      box.style.transform = `translate(${randomX}%, ${randomY}%)`;
   }

   //    setInterval(randomize, 1000);
}
