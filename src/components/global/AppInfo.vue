<template>
   <section class="app_info white_mode_color">
      <div class="box"></div>

      <span class="white_mode_color"></span>
      <aside class="app_info_wrapper container">
         <img
            class="desktop employees animation_fromLeft_to_right element-animation"
            src="@/assets/img/Header/employees.png"
            alt=""
         />
         <article>
            <h3
               class="default_title animation_fromRight_to_left element-animation"
            >
               Create your personal or business profile in less than two
               minutes.
            </h3>
            <p
               class="default_text animation_fromRight_to_left element-animation"
            >
               Create a profile for free and start enjoying a range of benefits!
               Our platform provides a social network exclusively for users,
               giving you the opportunity to connect with like-minded
               professionals end expand your network. You will also be able to
               access exclusive discounts on selected products.
            </p>
            <img
               class="employees_mobile animation_fromRight_to_left element-animation"
               src="@/assets/img/Header/employees.png"
               alt=""
            />
            <Ubutton
               class="intro_btn animation_fromLeft_to_right element-animation"
            >
               Get started for free</Ubutton
            >
         </article>
      </aside>

      <div class="box box2"></div>
   </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/common/defaultSection";

.app_info {
   //    box-shadow: 0px -95px 130px 100px rgb(0, 0, 0);
   margin-top: -20px;
   padding-top: 140px;
   background: #221f2c;
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
</style>
