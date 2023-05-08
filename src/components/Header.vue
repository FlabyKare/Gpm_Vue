<template>
   <div class="preloader_wrapper" loading="lazy">
      <div class="circles_wrapper" loading="lazy">
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
         <div class="circle" loading="lazy"></div>
      </div>
   </div>
   <img
      width="500"
      height="500"
      src="@/assets/img/blur.webp"
      class="box"
      loading="lazy"
   />

   <header class="main_page_header" loading="lazy">
      <Menu />
      <Navigation />
      <Intro />
      <AppInfo />
      <SpruceSection />
   </header>
</template>

<style lang="scss">
.box {
   position: absolute;
   top: 0;
   left: 0;
   border-radius: 50%;
   background: rgb(111, 0, 255);
   background: linear-gradient(
      162deg,
      rgba(111, 0, 255, 1) 0%,
      rgba(1, 237, 251, 1) 100%
   );
}
.nav_wrapper {
   * {
      z-index: 10 !important;
   }
}
</style>
