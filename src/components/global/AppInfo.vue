<template>
   <section class="app_info white_mode_color">
      <span class="white_mode_color"></span>
      <div class="app_info_wrapper container">
         <img
            class="employees"
            src="@/assets/img/Header/employees.png"
            alt=""
         />
         <article>
            <h3 class="default_title">
               Create your personal or business profile in less than two
               minutes.
            </h3>
            <p class="default_text">
               Create a profile for free and start enjoying a range of benefits!
               Our platform provides a social network exclusively for users,
               giving you the opportunity to connect with like-minded
               professionals end expand your network. You will also be able to
               access exclusive discounts on selected products.
            </p>
            <img
               class="employees_mobile"
               src="@/assets/img/Header/employees.png"
               alt=""
            />
            <Ubutton class="intro_btn"> Get started for free</Ubutton>
         </article>
      </div>
   </section>
</template>

<script></script>

<style lang="scss" scoped>
.app_info {
   box-shadow: 0px -95px 130px 100px rgb(0, 0, 0);
   margin-top: -20px;
   padding-top: 140px;
   background: #221f2c;
   width: 100%;
   position: relative;
   z-index: 1;
   span {
      //   box-shadow: 0px 100px 100px 100px rgba(0, 0, 0, 1) inset;
      background: rgb(0, 0, 0);
      background: linear-gradient(
         0deg,
         rgba(0, 0, 0, 0.4962359943977591) 0%,
         rgba(0, 0, 0, 1) 100%
      );
      filter: blur(15px);

      width: 105%;
      height: 75px;

      position: absolute;
      top: -40px;
      left: -15px;

      &.active {
         display: none;
      }
   }
   &.active {
      box-shadow: 0px -95px 130px 100px rgb(255, 255, 255) !important;
   }
}
.app_info_wrapper {
   display: flex;
   justify-content: space-evenly;
   gap: 50px;
   flex-wrap: wrap;
}

.intro_btn,
.default_text {
   margin-top: 50px;
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
      box-shadow: 0px 0px 100px 100px rgb(0, 0, 0) !important;
      &.active {
         box-shadow: 0px 0px 130px 100px rgb(255, 255, 255) !important;
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
      margin: 2% auto 0;
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
@media (min-width: 1200px) and (max-width: 1399.98px) {
}
@media (min-width: 1400px) {
}
</style>
