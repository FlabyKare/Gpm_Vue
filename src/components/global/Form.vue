<template>
   <form action="#" class="container">
      <h3
         class="default_title animation_fromLeft_to_right element-animation"
         loading="lazy"
      >
         Contact us
      </h3>
      <input
         class="white_mode_color animation_fromRight_to_left element-animation"
         type="text"
         placeholder="Your Name/Company"
         loading="lazy"
      />
      <input
         class="white_mode_color animation_fromLeft_to_right element-animation"
         type="text"
         placeholder="Your Email"
         loading="lazy"
      />
      <textarea
         class="white_mode_color animation_fromRight_to_left element-animation"
         placeholder="Your Message"
         loading="lazy"
      ></textarea>
      <Ubutton
         class="intro_btn animation_fromLeft_to_right element-animation"
         loading="lazy"
         >Send</Ubutton
      >
   </form>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "@/assets/common/defaultSection";

form {
   padding: 0 20px 115px;
   position: relative;
   max-width: 850px;

   * {
      position: inherit;
      z-index: 3;
   }
   .default_title {
      margin: 0 auto 60px;
      width: fit-content;
   }
   input,
   textarea {
      padding: 20px 30px;
      margin: 0 auto;
      display: block;
      width: 100%;
      background: #393547;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
      border-radius: 6px;
      border: none;
      outline: none;
      font-family: $Poppins;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.7);
   }
   input {
      margin-bottom: 25px;
   }
   textarea {
      resize: none;
      min-height: 170px;
      max-height: 270px;
      margin-bottom: 25px;
      line-height: 22px;
   }
   .intro_btn {
      display: block;
      margin: 55px auto 0;
      min-width: 240px;
   }
   @media (min-width: 576px) {
      textarea {
         min-height: 170px;
      }
   }
}
</style>
