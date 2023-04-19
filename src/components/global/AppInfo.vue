<template>
   <section class="app_info white_mode_color">
      <div class="box"></div>

      <span class="white_mode_color"></span>
      <aside class="app_info_wrapper container">
         <img
            class="employees animation_fromLeft_to_right element-animation"
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

.box {
   right: 0;
   left: auto;
}
.app_info_wrapper {
   display: flex;
   justify-content: space-evenly;
   gap: 50px;
   flex-wrap: wrap;
   * {
      z-index: 1;
   }
}

.intro_btn,
.default_text {
   margin-top: 50px;
}
.box2 {
   left: auto;
   top: auto;
   right: 0;
   bottom: 0;
}
img {
   max-width: 515px;
   height: 495px;
}

//! Comment

@media (min-width: 320px) and (max-width: 575.98px) {
   .default_text {
      margin: 25px auto 0;
   }
   article {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   .intro_btn {
      margin: 25px auto 0;
      max-width: fit-content;
   }
   img {
      display: none;
   }
   .employees_mobile {
      height: auto !important;
      width: 100%;
      display: block;
   }
   .app_info {
      padding-top: 50px;
      //   box-shadow: 0px 0px 100px 100px rgb(0, 0, 0) !important;
      span {
         box-shadow: 0px 105px 155px 100px rgb(0, 0, 0);
      }
      &.active {
         //  box-shadow: 0px 25px 65px 120px rgb(255, 255, 255) !important;
      }
   }
}
@media (max-width: 991.98px) {
   img {
      height: auto !important;
      width: 100%;
      display: none;
   }
   .employees_mobile {
      height: auto !important;
      width: 100%;
      display: block;
      margin: 10% auto 0;
   }
   article {
      display: flex;
      flex-direction: column;
      justify-content: center;
   }
   .intro_btn {
      margin: 25px auto 0;
   }
}

@media (min-width: 992px) {
   img {
      height: auto !important;
      width: 100%;
   }
   .employees_mobile {
      display: none;
   }
}
@media (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 576px) and (max-width: 1199.98px) {
   .default_title,
   .default_text {
      width: 100%;
      max-width: 750px;
   }
   img {
      height: 650px;
      max-width: 640px !important;
   }
}
</style>
