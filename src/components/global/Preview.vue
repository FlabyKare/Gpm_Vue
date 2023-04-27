<template>
   <section class="preview app_info white_mode_color" loading="lazy">
      <div class="box" loading="lazy"></div>
      <div class="box box2" loading="lazy"></div>

      <aside class="app_info_wrapper container" loading="lazy">
         <img
            class="desktop employees animation_fromLeft_to_right element-animation"
            src="@/assets/img/Main/Program_Preview.png"
            alt=""
         />
         <article>
            <h3
               class="default_title animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Experience effortless team management.
            </h3>
            <img
               class="employees_mobile animation_fromRight_to_left element-animation"
               src="@/assets/img/Main/Program_Preview.png"
               alt=""
            />
            <p
               class="default_text animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Make managing your team easier than ever with one dashboard - all
               in one place! Discover our white label CRM system for teams and
               companies that includes powerful statistics and social network
               capabilities. Customize features to fit the specific needs of
               your team. This offers the flexibility and convenience of a
               powerful CRM system without having to build it from scratch.
            </p>

            <Ubutton
               class="intro_btn animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               Get started</Ubutton
            >
         </article>
      </aside>

      <div class="box box2" loading="lazy"></div>
   </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/common/defaultSection";

.box {
   position: absolute !important;
   top: auto;
   left: auto;
   bottom: 100px;
   right: 100px;
   filter: blur(130px);
   z-index: -1 !important;
}
.box2 {
   top: -85px;
   left: 0px;
   bottom: auto;
   right: auto;
}
.app_info_wrapper {
   flex-direction: row-reverse;
   align-items: center;
}

.intro_btn {
   min-width: 240px;
}
.preview {
   padding-bottom: 100px;
}
@media (max-width: 575.98px) {
   .preview {
      padding-top: 60px;
   }
}
</style>
