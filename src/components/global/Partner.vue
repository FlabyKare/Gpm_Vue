<template>
   <section class="partner_wrapper white_mode_color" loading="lazy">
      <div class="box" loading="lazy"></div>
      <h3
         class="default_title animation_fromRight_to_left element-animation"
         loading="lazy"
      >
         Become a reseller and start earning now.
      </h3>
      <p
         class="default_text animation_fromRight_to_left element-animation"
         loading="lazy"
      >
         Become a GPM.Link reseller, create your own personalized page in just a
         few clicks and start earning up to 65% of your affiliate subscriptions
         and 35% on affiliate product purchases.
      </p>
      <aside class="container" loading="lazy">
         <img
            class="partner_image animation_fromLeft_to_right element-animation"
            src="@/assets/img/Main/Partner_Preview.png"
            alt=""
            loading="lazy"
         />
         <Ubutton
            class="intro_btn animation_fromLeft_to_right element-animation"
            loading="lazy"
         >
            Get started for free</Ubutton
         >
      </aside>

      <div class="box box2" loading="lazy"></div>
   </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/common/defaultSection";
.partner_wrapper {
   padding: 95px 20px 100px;
   position: relative;
   * {
      z-index: 2;
      position: inherit;
   }
}
.partner_image {
   width: 590px;
   height: 285px;
   margin: 40px auto 60px;
   display: block;
   border: 2px solid rgba(255, 0, 0, 0);

   transition-property: border, transform;
   transition-duration: 0.25s, 0.5s;
   border-radius: 15px;

   &:hover {
      border: 2px solid rgba(255, 0, 0, 1);
   }
   @media (max-width: 700px) {
      width: 100%;
      height: auto;
   }
}
.box {
   position: absolute !important;
   bottom: auto;
   top: 100px;
   left: 100px;
   right: auto;
   filter: blur(200px);
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
</style>
