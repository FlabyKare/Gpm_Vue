<template>
   <section class="spruce">
      <aside class="spruce_aside container white_mode_color">
         <h3 class="default_title">
            Get an NFC card and link it to your profile. We plant a tree for
            each card!
         </h3>
         <img
            class="card"
            src="@/assets/img/Header/Spruce_Card.png"
            alt="card"
         />
         <img
            class="spruce_img"
            src="@/assets/img/Header/Spruce.png"
            alt="spruce"
         />
      </aside>
   </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.spruce {
   margin-top: 125px;
   padding: 75px 20px;

   width: 100%;

   background: url("@/assets/img/Header/Spruce_bg.png");
   background-position: center;
   background-repeat: no-repeat;
   background-size: 100% 100%;
   overflow: hidden;
}

.default_title {
   font-size: 36px;
   line-height: 46px;
   max-width: 535px;
}
.spruce_aside {
   margin: auto;
   padding: 50px 0 50px 90px;

   display: flex;
   position: relative;

   max-width: 1032px;
   //    height: 240px;

   border-radius: 15px;
   background: #221f2c;
}
.card {
   position: absolute;
   top: 0;
   right: 0;

   width: 320px;
   height: 203.37px;
   border-radius: 20px;

   transform: rotate(20deg);
}
.spruce_img {
   position: absolute;
   top: 0;
   right: 0;

   width: 190px;
   height: 330px;
}

//! Comment

@media (min-width: 320px) and (max-width: 575.98px) {
   .spruce {
      padding: 35px 20px;
      margin-top: 55px;

      .spruce_aside {
         padding: 30px;
      }
      .default_title {
         font-size: 16px;
         line-height: 20px;
      }
   }
}
@media (min-width: 576px) and (max-width: 767.98px) {
   .spruce {
      padding: 35px 20px;
      margin-top: 55px;
      .spruce_aside {
         padding: 30px;
      }
      .default_title {
         font-size: 25px;
         line-height: 35px;
      }
   }
}

@media (max-width: 991.98px) {
   .spruce_aside {
      padding: 50px 40px;

      .default_title {
         max-width: 100%;
         text-align: center;
      }
      img {
         display: none;
      }
   }
}
@media (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 992px) and (max-width: 1199.98px) {
   .spruce_aside {
      padding-left: 40px;
   }
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}
@media (min-width: 1400px) {
}
</style>
