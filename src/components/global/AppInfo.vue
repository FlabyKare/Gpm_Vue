<template>
   <section class="app_info white_mode_color" loading="lazy">
      <img
         width="500"
         height="500"
         src="@/assets/img/blur.webp"
         class="box"
         loading="lazy"
      />
      <img
         width="500"
         height="500"
         src="@/assets/img/blur.webp"
         class="box box2"
         loading="lazy"
      />

      <span class="white_mode_color"></span>
      <aside class="app_info_wrapper container" loading="lazy">
         <img
            width="515"
            height="500"
            class="mobile_none employees animation_fromLeft_to_right element-animation"
            src="@/assets/img/Header/employees.webp"
            alt="Emplyoees profiles"
            loading="lazy"
         />
         <article>
            <h3
               class="default_title animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Create your personal or business profile in less than two
               minutes.
            </h3>
            <p
               class="default_text animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Create a profile for free and start enjoying a range of benefits!
               Our platform provides a social network exclusively for users,
               giving you the opportunity to connect with like-minded
               professionals end expand your network. You will also be able to
               access exclusive discounts on selected products.
            </p>

            <img
               width="515"
               height="500"
               class="desktop_none animation_fromRight_to_left element-animation"
               src="@/assets/img/Header/employees-mobile.webp"
               alt="Emplyoees profiles"
               loading="lazy"
            />
            <Ubutton
               class="intro_btn animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               Get started for free</Ubutton
            >
         </article>
      </aside>

      <img
         width="500"
         height="500"
         src="@/assets/img/blur.webp"
         class="box box2"
         loading="lazy"
      />
   </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/common/defaultSection";

.box {
   position: absolute !important;
   top: auto;
   left: auto;
   bottom: -85px;
   right: 0px;
   filter: blur(130px);
   z-index: -1 !important;
}
.box2 {
   top: -85px;
   left: 0px;
   bottom: auto;
   right: auto;
}
.app_info {
   //    box-shadow: 0px -95px 130px 100px rgb(0, 0, 0);
   margin-top: -20px;
   padding-top: 140px;
   width: 100%;
   position: relative;
   z-index: 1;
   span {
      box-shadow: 0px 105px 165px 185px rgb(0, 0, 0);
      width: 105%;
      height: 0px;
      position: absolute;
      top: -140px;
      left: -15px;

      &.active {
         display: none;
      }
   }
   &.active {
      box-shadow: 0px -95px 130px 100px rgb(255, 255, 255) !important;
   }
}
.app_info {
   padding-top: 50px;
}
.desktop_none {
   width: 100%;
   max-width: 500px;
   height: auto;
   margin: 50px auto 0;
}
</style>
