<script setup></script>
<template>
   <div class="menu-wrapper">
      <div class="menu_blur"></div>
      <ul class="menu-list">
         <li class="menu_dropDown white_mode_color">
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
         <ul class="menu_dropDown_list">
            <li class="menu_dropDown_list_item white_mode_color">
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Link.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Link</p>
               </a>
            </li>

            <li class="menu_dropDown_list_item white_mode_color">
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/CPN_Contact.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM for Businesses and Teams</p>
               </a>
            </li>

            <li class="menu_dropDown_list_item white_mode_color">
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Mail.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Mall</p>
               </a>
            </li>

            <li class="menu_dropDown_list_item white_mode_color">
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Travel.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Travel</p>
               </a>
            </li>

            <li class="menu_dropDown_list_item white_mode_color">
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Token.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Token</p>
               </a>
            </li>

            <li class="menu_dropDown_list_item white_mode_color">
               <a href="#" class="dropdown_link">
                  <img
                     src="@/assets/img/Navigation/GPM_Dollar.png"
                     alt="dropdown_link_img"
                  />
                  <p>GPM Reseller</p>
               </a>
            </li>
         </ul>
         <li class="contact_us white_mode_color">
            <a href="#">Contact us</a>
         </li>
      </ul>

      <form class="login_buttons buttons" action="#">
         <Ubutton class="login"> SignIn </Ubutton>
         <Ubutton class="sigin"> SignUp </Ubutton>
      </form>

      <ul class="languages">
         <li class="hover_shadow">
            <a href="#"
               ><img src="@/assets/img/Navigation/English.png" alt=""
            /></a>
         </li>
         <li class="hover_shadow">
            <a href="#"
               ><img src="@/assets/img/Navigation/Franch.png" alt=""
            /></a>
         </li>
         <li class="hover_shadow">
            <a width="100%" href="#"
               ><img
                  width="100%"
                  src="@/assets/img/Navigation/Spanish.png"
                  alt=""
            /></a>
         </li>
      </ul>
   </div>
</template>
