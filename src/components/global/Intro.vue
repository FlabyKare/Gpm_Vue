<template>
   <section id="intro" class="intro container">
      <h1
         class="intro_title animation_fromLeft_to_right element-animation"
         loading="lazy"
      >
         Experience the Power of <span>Digital</span> Business Profiles!
      </h1>
      <p
         class="intro_text animation_fromLeft_to_right element-animation"
         loading="lazy"
      >
         And discover the added perks.
      </p>
      <Ubutton
         class="intro_btn animation_fromLeft_to_right element-animation"
         loading="lazy"
         >Get started for free</Ubutton
      >
      <img
         width="580"
         height="1175"
         class="employees desktop_none"
         src="@/assets/img/Header/Peoples-mobile.webp"
         alt="Profiles of peoples"
      />

      <img
         width="580"
         height="1175"
         class="employees mobile_none"
         src="@/assets/img/Header/Peoples.webp"
         alt="Profiles of peoples"
      />

      <div class="box" loading="lazy"></div>
   </section>
</template>

<style lang="scss" scoped>
@import "@/assets/common/fonts";
.box {
   position: absolute !important;
   top: auto;
   left: auto;

   bottom: 115px;
   right: -300px;
   z-index: -1 !important;
}
.intro {
   margin-top: 100px !important;
   height: 700px;
   position: relative;
   .intro_btn {
      margin-top: 80px;
   }
   //    max-width: 1600px;
   * {
      z-index: 5;
      position: relative;
   }
   h1 {
      font-family: $Poppins;
      font-weight: 900;
      font-size: 56px;
      line-height: 62px;
      color: #ffffff;
      max-width: 565px;
      hyphens: auto;
   }
   .intro_text {
      hyphens: auto;
      font-family: $Poppins;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      color: #ffffff;
      max-width: 500px;
      margin-top: 20px;
   }

   h1 span,
   h1 span * {
      background: linear-gradient(90deg, #5ed3d0 56.44%, #8750f3 86.81%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
   }
   .employees {
      position: absolute;
      top: -185px;
      transform: rotate(37deg);
      z-index: 0;
   }
}
@media (min-width: 320px) and (max-width: 575.98px) {
   .intro {
      padding-right: 10px !important;
   }
   .box {
      display: none;
   }
   #intro {
      height: 485px;
      .intro_title {
         font-size: 28px;
         line-height: 32px;
      }
      .intro_text,
      .intro_title {
         width: 100%;
      }
      .intro_btn {
         margin-top: 45px;
      }
   }
}
@media (min-width: 576px) and (max-width: 767.98px) {
}
@media (min-width: 768px) and (max-width: 991.98px) {
}
@media (max-width: 964.98px) {
   .employees {
      opacity: 0.4;
      top: 20%;
      right: 20%;
   }
}
@media (min-width: 965px) and (max-width: 1199.98px) {
   .employees {
      right: -3%;
   }
}
@media (max-width: 1199.98px) {
   .intro {
      padding-left: 20px;
   }
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
   .employees {
      right: 7%;
   }
}
@media (max-width: 1299.98px) {
   .intro {
      overflow: hidden;
      padding-right: 0;
      //   margin: 0 auto;
   }
}
@media (min-width: 1300px) {
   .intro {
      padding-right: 0 !important;
      //   margin: 0 auto;
   }
}
@media (min-width: 1400px) {
   .employees {
      right: 17%;
   }
}
</style>
