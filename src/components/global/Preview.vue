<template>
   <section class="preview app_info white_mode_color" loading="lazy">
      <img
         width="500"
         height="500"
         src="@/assets/img/blur.webp"
         class="box"
         loading="lazy"
      />

      <img
         width="500"
         height="500"
         src="@/assets/img/blur.webp"
         class="box box2"
         loading="lazy"
      />

      <aside class="app_info_wrapper container" loading="lazy">
         <img
            width="535"
            height="337"
            class="mobile_none employees animation_fromLeft_to_right element-animation"
            src="@/assets/img/Main/Program_Preview.webp"
            alt="Preview of program"
         />
         <article>
            <h3
               class="default_title animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Experience effortless team management.
            </h3>
            <img
               width="535"
               height="337"
               class="desktop_none animation_fromRight_to_left element-animation"
               src="@/assets/img/Main/Program_Preview-mobile.webp"
               alt="Preview of program"
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

      <img
         width="500"
         height="500"
         src="@/assets/img/blur.webp"
         class="box box2"
         loading="lazy"
      />
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

.desktop_none {
   width: 100%;
   height: auto;
   margin: 50px auto 20px;
}
</style>
