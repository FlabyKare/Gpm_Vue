<script setup></script>
<template>
   <div class="menu-wrapper" loading="lazy">
      <div class="menu_blur" loading="lazy"></div>
      <ul class="menu-list white_mode_color" loading="lazy">
         <li
            class="menu_dropDown white_mode_color menu_li_style"
            loading="lazy"
         >
            <p>GPM Products</p>
            <svg
               width="14"
               height="9"
               viewBox="0 0 14 9"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M1 8L7 2L13 8" stroke="white" stroke-width="2" />
            </svg>
         </li>
         <ul class="menu_dropDown_list" loading="lazy">
            <li
               class="menu_dropDown_list_item white_mode_color menu_li_style"
               loading="lazy"
            >
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Link.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Link</p>
               </a>
            </li>

            <li
               class="menu_dropDown_list_item white_mode_color menu_li_style"
               loading="lazy"
            >
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/CPN_Contact.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM for Businesses and Teams</p>
               </a>
            </li>

            <li
               class="menu_dropDown_list_item white_mode_color menu_li_style"
               loading="lazy"
            >
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Mail.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Mall</p>
               </a>
            </li>

            <li
               class="menu_dropDown_list_item white_mode_color menu_li_style"
               loading="lazy"
            >
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Travel.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Travel</p>
               </a>
            </li>

            <li
               class="menu_dropDown_list_item white_mode_color menu_li_style"
               loading="lazy"
            >
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Token.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Token</p>
               </a>
            </li>

            <li
               class="menu_dropDown_list_item white_mode_color menu_li_style"
               loading="lazy"
            >
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Dollar.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Reseller</p>
               </a>
            </li>
         </ul>
         <li class="contact_us white_mode_color menu_li_style" loading="lazy">
            <a href="#" loading="lazy">Contact us</a>
         </li>

         <form
            class="login_buttons buttons minimal_height"
            action="#"
            loading="lazy"
         >
            <Ubutton
               class="login animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               SignIn
            </Ubutton>
            <Ubutton
               class="sigin animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               SignUp
            </Ubutton>
         </form>

         <ul class="languages minimal_height" loading="lazy">
            <li
               class="hover_shadow animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               <a href="#"
                  ><img
                     src="@/assets/img/Navigation/English.png"
                     alt=""
                     loading="lazy"
               /></a>
            </li>
            <li class="hover_shadow element-animation">
               <a href="#"
                  ><img
                     src="@/assets/img/Navigation/Franch.png"
                     alt=""
                     loading="lazy"
               /></a>
            </li>
            <li
               class="hover_shadow animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               <a width="100%" href="#" loading="lazy"
                  ><img
                     width="100%"
                     src="@/assets/img/Navigation/Spanish.png"
                     alt=""
                     loading="lazy"
               /></a>
            </li>
         </ul>
      </ul>

      <form
         class="login_buttons buttons hide_on_little_screen"
         action="#"
         loading="lazy"
      >
         <Ubutton
            class="login animation_fromLeft_to_right element-animation"
            loading="lazy"
         >
            SignIn
         </Ubutton>
         <Ubutton
            class="sigin animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            SignUp
         </Ubutton>
      </form>

      <ul class="languages hide_on_little_screen" loading="lazy">
         <li
            class="hover_shadow animation_fromLeft_to_right element-animation"
            loading="lazy"
         >
            <a href="#" loading="lazy"
               ><img
                  src="@/assets/img/Navigation/English.png"
                  alt=""
                  loading="lazy"
            /></a>
         </li>
         <li class="hover_shadow element-animation" loading="lazy">
            <a href="#" loading="lazy"
               ><img
                  src="@/assets/img/Navigation/Franch.png"
                  alt=""
                  loading="lazy"
            /></a>
         </li>
         <li
            class="hover_shadow animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            <a width="100%" href="#" loading="lazy"
               ><img
                  width="100%"
                  src="@/assets/img/Navigation/Spanish.png"
                  alt=""
                  loading="lazy"
            /></a>
         </li>
      </ul>
   </div>
</template>

<style lang="scss" scoped>
.menu-wrapper {
   padding-bottom: 25px;
}
.menu-list {
   overflow-y: auto;
   overflow-x: hidden;

   &::-webkit-scrollbar {
      //   z-index: 9999 !important;
      background: #4e4e56;
      width: 2px;
   }
   &::-webkit-scrollbar-thumb {
      background: #fff;
      cursor: pointer !important;
   }
   &::-webkit-scrollbar-track {
      //   z-index: 9999 !important;
      transition: 0.5s;
   }

   &::-webkit-scrollbar-button {
      display: none;
   }
   &.active {
      background: transparent !important;
      &::-webkit-scrollbar {
         background: #fff !important;
      }
      &::-webkit-scrollbar-thumb {
         background: #4e4e56 !important;
         cursor: pointer !important;
      }
   }

   .menu_li_style {
      background: rgb(23 21 30 / 70%);
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
      padding: 15px 20px 15px 25px;
      &:hover {
         background: rgba(255, 255, 255, 0.1);
      }
      &.active {
         &:hover {
            box-shadow: 0px 0px 15px rgba(161, 136, 245, 0.4);
         }
      }
   }
   .languages {
      justify-content: center;
   }
   li {
      background: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
   }

   .login_buttons {
      justify-content: center;
   }
}
//! Comment
@media (max-height: 444.98px) {
   .hide_on_little_screen {
      display: none;
   }
}

@media (min-height: 445px) {
   .minimal_height {
      display: none;
   }
}
</style>
