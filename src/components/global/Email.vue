<template>
   <section class="email" loading="lazy">
      <aside class="container white_mode_color" loading="lazy">
         <h3
            class="default_title animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            Join our newsletter.
         </h3>
         <div class="input_container white_mode_color" loading="lazy">
            <div
               class="input_wrapper animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               <input type="text" placeholder="Your Email" loading="lazy" />

               <img
                  class="white_line"
                  src="@/assets/img/Main/Email_WhiteLine.png"
                  alt=""
                  loading="lazy"
               />
               <img
                  class="black_line"
                  src="@/assets/img/Main/Email_BlaсkLine.png"
                  alt=""
                  loading="lazy"
               />
            </div>
         </div>
         <div class="email_button_wrapper" loading="lazy">
            <Ubutton class="intro_btn desktop_btn" loading="lazy">
               Send</Ubutton
            >
         </div>
      </aside>
      <Ubutton
         class="intro_btn mobile_btn animation_fromLeft_to_right element-animation"
         loading="lazy"
         >Send</Ubutton
      >
   </section>
   <p
      class="footer_title white_mode_color animation_fromRight_to_left element-animation"
      loading="lazy"
   >
      Copyright © 2022 All rights reserved - GPM
   </p>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/common/fonts";
@import "@/assets/common/defaultSection";
.email {
   background: url("@/assets/img/Main/Email_Bg.png");
   background-repeat: no-repeat;
   background-size: 100% 100%;
   padding: 45px 0;
   position: relative;

   * {
      z-index: 3;
   }

   @media (max-width: 767.98px) {
      padding: 45px 20px;
   }
}
aside {
   background: #393547;
   border-radius: 12px;
   padding: 40px 20px;
   max-width: 680px;
   position: relative;
   * {
      display: block;
      margin: 0 auto;
   }
}
.default_title {
   width: fit-content;
   margin-bottom: 70px;
}
.input_container {
   display: flex;
   flex-direction: column;
   max-width: 480px;
   justify-content: start;
   .white_line {
      display: block;
   }
   .black_line {
      display: none;
   }
   &.active {
      .black_line {
         display: block;
      }
      .white_line {
         display: none;
      }
   }
}
.input_wrapper {
   width: 100%;
   img {
      width: 100% !important;
      max-height: 1px;
   }
}
input {
   padding: 0 5px;

   margin: 0 auto 10px;

   display: block;
   position: relative;
   width: 100%;

   background: transparent;
   border-radius: 6px;
   border: none;
   outline: none;

   font-family: $Poppins;
   font-weight: 500;
   font-size: 16px;
   line-height: 18px;
   color: rgba(255, 255, 255, 0.7);
}

.email_button_wrapper {
   position: absolute;

   width: fit-content;

   top: 49%;
   right: -0.6%;
   .intro_btn {
      min-width: 128px;
      position: relative;

      top: 50%;
      right: 0;
      transform: translate(15%, -60%) !important;

      background: linear-gradient(270deg, #88a2fa 0%, #5ed3d0 100%);
      border-radius: 8px 0px 0px 8px;
      border: none;
      display: block;
      transition: all 0.1s ease-in-out !important;

      &:hover {
         color: #fff !important;
         background: linear-gradient(270deg, #88a2fa 0%, #88a2fa 100%);
         box-shadow: -10px 2px 22px 7px rgba(136, 162, 250, 1);
      }
   }
   &::after {
      content: "";
      background: #6279c5;
      width: 25px;
      height: 25px;
      display: block;
      z-index: -10;
      position: absolute;
      bottom: 144px;
      right: 0px;
      transform: rotate(0deg) translate(19px, 56px);
      clip-path: polygon(8% 2%, 7% 100%, 103.86% 100%);
   }

   @media (max-width: 575.98px) {
      display: none;
      .intro_btn {
         display: none;
      }
   }
   @media (min-width: 576px) and (max-width: 767.98px) {
      top: 60%;
   }
   @media (min-width: 768px) and (max-width: 991.98px) {
      top: 60%;
   }
}

@media (min-width: 320px) and (max-width: 575.98px) {
   .desktop_btn {
      display: none;
   }
   .mobile_btn {
      display: block;
      margin-top: 55px;
      min-width: 240px;
   }
}

@media (min-width: 576px) {
   .mobile_btn {
      display: none;
   }
}

.footer_title {
   font-family: $Poppins;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   text-align: center;
   color: rgba(255, 255, 255, 0.7);
   hyphens: auto;

   display: block;
   width: fit-content;
   margin: 50px auto;
   padding: 0 20px;

   &.active {
      background: transparent;
      color: #5b5b5b;
   }
}
</style>
