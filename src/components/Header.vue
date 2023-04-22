<template>
   <div class="preloader_wrapper">
      <div class="circles_wrapper">
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
      </div>
   </div>
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
</style>
