<template>
   <section class="nav_wrapper">
      <div class="blur"></div>
      <nav class="container nav">
         <div
            class="burger-menu animation_fromLeft_to_right element-animation"
            loading="lazy"
         >
            <span class="line line-1 white_mode_color"></span>
            <span class="line line-2 white_mode_color"></span>
            <span class="line line-3 white_mode_color"></span>
         </div>

         <div class="links" loading="lazy">
            <img
               class="hover_visibility animation_fromLeft_to_right element-animation"
               width="45px"
               height="45px"
               src="@/assets/img/Navigation/Logo.png"
               alt="logo"
               loading="lazy"
            />
            <a
               href="#"
               class="desktop_nav_link products_dropdown_link animation_fromLeft_to_right element-animation"
               loading="lazy"
               >Products</a
            >
            <a
               href="#"
               class="desktop_nav_link animation_fromLeft_to_right element-animation"
               loading="lazy"
               >Contact us</a
            >
            <ul class="products_dropdown white_mode_color" loading="lazy">
               <li class="dropdown_item white_mode_color">
                  <a href="#" class="dropdown_link">
                     <img
                        width="17px"
                        height="23px"
                        src="@/assets/img/Navigation/GPM_Link.png"
                        alt="Icon of link"
                     />
                     <p>GPM Link</p>
                  </a>
               </li>

               <li class="dropdown_item white_mode_color">
                  <a href="#" class="dropdown_link">
                     <img
                        width="17px"
                        height="23px"
                        src="@/assets/img/Navigation/CPN_Contact.png"
                        alt="Icon of contact"
                     />
                     <p>GPM for Businesses and Teams</p>
                  </a>
               </li>

               <li class="dropdown_item white_mode_color">
                  <a href="#" class="dropdown_link">
                     <img
                        width="17px"
                        height="23px"
                        src="@/assets/img/Navigation/GPM_Mail.png"
                        alt="Icon of email"
                     />
                     <p>GPM Mall</p>
                  </a>
               </li>

               <li class="dropdown_item white_mode_color">
                  <a href="#" class="dropdown_link">
                     <img
                        width="17px"
                        height="23px"
                        src="@/assets/img/Navigation/GPM_Travel.png"
                        alt="Icon of travel"
                     />
                     <p>GPM Travel</p>
                  </a>
               </li>

               <li class="dropdown_item white_mode_color">
                  <a href="#" class="dropdown_link">
                     <img
                        width="17px"
                        height="23px"
                        src="@/assets/img/Navigation/GPM_Token.png"
                        alt="Icon of token"
                     />
                     <p>GPM Token</p>
                  </a>
               </li>

               <li class="dropdown_item white_mode_color">
                  <a href="#" class="dropdown_link">
                     <img
                        width="17px"
                        height="23px"
                        src="@/assets/img/Navigation/GPM_Dollar.png"
                        alt="Icon of vaulue"
                     />
                     <p>GPM Reseller</p>
                  </a>
               </li>
            </ul>
         </div>

         <a class="mobile_logo element-animation" href="#" loading="lazy">
            <img
               width="45px"
               height="45px"
               src="@/assets/img/Navigation/Title_Logo.png"
               alt="Mobile logo"
            />
         </a>
         <div class="buttons" loading="lazy">
            <div
               class="language_changer animation_fromRight_to_left element-animation"
            >
               <img
                  class="language show_language hover_shadow"
                  src="@/assets/img/Navigation/English.png"
                  alt="Icon of English language"
               />
               <div class="dropdown_menu dropdown_call white_mode_color">
                  <img
                     class="language hover_shadow"
                     src="@/assets/img/Navigation/English.png"
                     alt="Icon of English language"
                  />
                  <img
                     class="language hover_shadow"
                     src="@/assets/img/Navigation/Franch.png"
                     alt="Icon of Franch language"
                  />
                  <img
                     class="language hover_shadow"
                     src="@/assets/img/Navigation/Spanish.png"
                     alt="Icon of Spanish language"
                  />
               </div>
            </div>
            <button
               class="theme_button dark animation_fromRight_to_left element-animation"
            >
               <div class="dark_icons">
                  <img
                     class="dark_icon unions"
                     width="30px"
                     height="20px"
                     src="@/assets/img/Navigation/Union_group.png"
                     alt="unions image"
                  />
                  <img
                     class="dark_icon star1 little_star"
                     src="@/assets/img/Navigation/Big_star.png"
                     alt="star1"
                     width="5px"
                     height="5px"
                  />
                  <img
                     class="dark_icon star2 big_star"
                     src="@/assets/img/Navigation/Big_star.png"
                     alt="star2"
                     width="5px"
                     height="5px"
                  />
                  <img
                     class="dark_icon star3 big_star"
                     src="@/assets/img/Navigation/Big_star.png"
                     alt="star3"
                     width="5px"
                     height="5px"
                  />
                  <img
                     class="dark_icon star4 little_star"
                     src="@/assets/img/Navigation/Big_star.png"
                     alt="star4"
                     width="5px"
                     height="5px"
                  />
                  <img
                     class="dark_icon moon"
                     src="@/assets/img/Navigation/Moon.png"
                     alt="moon"
                     width="11px"
                     height="16px"
                  />
               </div>

               <div class="white_icons">
                  <img
                     class="sun"
                     src="@/assets/img/Navigation/Sun.png"
                     alt="Sun"
                     width="18px"
                     height="18px"
                  />
                  <img
                     class="sun_unions"
                     src="@/assets/img/Navigation/Sun_unions.png"
                     alt="Unions"
                     width="27px"
                     height="18px"
                  />
               </div>
            </button>
            <form class="login_buttons" action="#">
               <Ubutton
                  class="login animation_fromRight_to_left element-animation"
               >
                  SignIn
               </Ubutton>
               <Ubutton
                  class="sigin animation_fromRight_to_left element-animation"
               >
                  SignUp
               </Ubutton>
            </form>
         </div>
      </nav>
   </section>
</template>

<style lang="scss" scoped>
.nav_wrapper {
   &::after {
      content: "";
      display: block;

      width: 1150px;
      margin: 20px auto 0;
      height: 2px;

      background: url("@/assets/img/Navigation/Line_for_Nav.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
   }
}
</style>
