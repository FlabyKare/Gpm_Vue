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

@media (min-width: 320px) and (max-width: 575.98px) {
   .default_title {
      font-size: 24px;
      line-height: 29px;
   }
   .default_text {
      font-size: 14px;
      line-height: 20px;
   }
}
</style>
