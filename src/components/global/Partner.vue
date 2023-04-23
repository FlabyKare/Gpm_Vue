<template>
   <section class="partner_wrapper white_mode_color">
      <div class="box"></div>
      <h3 class="default_title animation_fromRight_to_left element-animation">
         Become a reseller and start earning now.
      </h3>
      <p class="default_text animation_fromRight_to_left element-animation">
         Become a GPM.Link reseller, create your own personalized page in just a
         few clicks and start earning up to 65% of your affiliate subscriptions
         and 35% on affiliate product purchases.
      </p>
      <aside class="container">
         <img
            class="partner_image animation_fromRight_to_left element-animation"
            src="@/assets/img/Main/Partner_Preview.png"
            alt=""
         />
         <Ubutton
            class="intro_btn animation_fromLeft_to_right element-animation"
         >
            Get started for free</Ubutton
         >
      </aside>

      <div class="box box2"></div>
   </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/common/defaultSection";
.partner_wrapper {
   padding: 95px 20px 100px;
}
.partner_image {
   width: 590px;
   height: 285px;
   margin: 40px auto 60px;
   display: block;
   transition: border 0.25s !important;
   border: 2px solid transparent;
   border-radius: 15px;

   &:hover {
      border: 2px solid red;
   }
   @media (max-width: 700px) {
      width: 100%;
      height: auto;
   }
}
.box {
   position: absolute;
   bottom: auto;
   top: 235px;
   left: auto;
   right: 400px;
   filter: blur(130px);
   z-index: -1 !important;
   @media (max-width: 1199.98px) {
      left: auto;
      right: auto;
   }
}
.intro_btn {
   min-width: 240px;
   margin: 0 auto;
   display: block;
}

.default_title {
   margin: 0 auto;
   max-width: 470px;
   text-align: center;
}
.default_text {
   margin: 30px auto 0;

   max-width: 840px;
   text-align: center;
}
@media (max-width: 575.98px) {
}
</style>
