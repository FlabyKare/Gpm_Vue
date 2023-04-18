<template>
   <div class="box"></div>

   <header class="main_page_header">
      <Menu />
      <Navigation />
      <Intro />
      <AppInfo />
      <SpruceSection />
   </header>
</template>

<style lang="scss">
// .down_shadow {
//    position: absolute;
//    bottom: 0;
//    left: 0;

//    width: 100%;
//    height: 100px;

//    background: rgb(0, 0, 0);
//    background: linear-gradient(
//       0deg,
//       rgba(0, 0, 0, 1) 0%,
//       rgba(0, 0, 0, 0.3981967787114846) 100%
//    );
//    //    opacity: 0.2;
// }
.box {
   position: absolute;
   top: 0;
   left: 0;
   transition: 5.5s ease-in-out;
   width: 500px;
   height: 500px;
   border-radius: 50%;
   background: rgb(111, 0, 255);
   background: linear-gradient(
      162deg,
      rgba(111, 0, 255, 1) 0%,
      rgba(1, 237, 251, 1) 100%
   );
   filter: blur(50px);
   opacity: 0.2;
}
.nav_wrapper {
   * {
      z-index: 10 !important;
   }
}

//! Comment

@media (min-width: 320px) and (max-width: 575.98px) {
   .menu-wrapper {
      padding-bottom: 25px;
   }
   .menu-list {
      overflow-y: auto;
   }
   .default_title {
      font-size: 24px;
      line-height: 29px;
   }
   .default_text {
      font-size: 14px;
      line-height: 20px;
   }
}
@media (min-width: 576px) and (max-width: 767.98px) {
}
@media (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 992px) and (max-width: 1199.98px) {
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}
@media (min-width: 1400px) {
}
</style>
