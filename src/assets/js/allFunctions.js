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

//! Плавный переход по "Якорным ссылкам"

function handleClick(event) {
   event.preventDefault();
   const elementClick = this.getAttribute("href");
   const destination = document.querySelector(elementClick).offsetTop;
   window.scrollTo({
      top: destination,
      behavior: "smooth",
   });
}

document.querySelectorAll("a.scrollto").forEach((link) => {
   link.addEventListener("click", handleClick);
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

let imagesWrapperItem = document.querySelectorAll(
   ".slider_images_wrapper_item"
);

function resetClassesForImages() {
   this.querySelectorAll(".slider_images_wrapper_item").forEach((item) => {
      item.classList.remove("showing");
   });
}

imagesWrapperItem.forEach((item) => {
   item.addEventListener("click", function () {
      resetClassesForImages.bind(this.parentElement)();
      this.classList.add("showing");
   });
});
