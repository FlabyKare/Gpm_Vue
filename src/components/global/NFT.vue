<template>
   <section class="nft_wrapper white_mode_color">
      <div class="box"></div>
      <h3 class="default_title animation_fromRight_to_left element-animation">
         Go further - get an NFT that gives you up to 1000% per year!
      </h3>
      <aside class="nft app_info_wrapper container">
         <div
            class="slider_images_wrapper desktop nft_image_item animation_fromLeft_to_right element-animation"
         >
            <img
               class="slider_images_wrapper_item nft_image"
               src="@/assets/img/Main/Benefits/Nft_Picture.png"
               alt=""
            />
            <img
               class="showing slider_images_wrapper_item nft_image"
               src="@/assets/img/Main/Benefits/Nft_Picture.png"
               alt=""
            />
         </div>
         <article>
            <p
               class="default_text animation_fromRight_to_left element-animation"
            >
               Discover our NFT collection designed to provide up to 1000%
               return on your investment annually. With NFTs, you can experience
               true ownership of digital assets and have the opportunity to
               maximize your profits with referrals. Have some fun and laverage
               on the potential of NFTs!
            </p>
            <div
               class="slider_images_wrapper employees_mobile nft_image_item animation_fromRight_to_left element-animation"
            >
               <img
                  class="slider_images_wrapper_item nft_image"
                  src="@/assets/img/Main/Benefits/Nft_Picture.png"
                  alt=""
               />
               <img
                  class="showing slider_images_wrapper_item nft_image mobile_none"
                  src="@/assets/img/Main/Benefits/Nft_Picture.png"
                  alt=""
               />
            </div>
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
@import "@/assets/common/defaultSection";
.nft {
   align-items: end;
}
.slider_images_wrapper {
   position: relative;
   bottom: -30px;

   width: auto;
   height: auto;

   display: flex;
   flex-direction: row;
   gap: 15px;
   justify-content: space-between;
   .slider_images_wrapper_item {
      height: 230px !important;
      width: 360px !important;
   }
}

.nft_wrapper {
   margin-top: 0;
   padding: 110px 0 100px;
   position: relative;
   //    overflow: hidden;
}

.box {
   position: absolute;
   bottom: auto;
   top: 235px;
   left: auto;
   right: 400px;
   filter: blur(130px);
   z-index: -1 !important;
   @media (max-width: 1199.98px) {
      left: auto;
      right: auto;
   }
}
.intro_btn {
   min-width: 240px;
}

.default_title {
   margin: 0 auto 50px;
   max-width: 660px;
   text-align: center;
}

@media (min-width: 576px) {
   .slider_images_wrapper_item.showing {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: rotate(-20deg) translate(-35%, -100%);
      z-index: 0;
      //  transition: 0.5s;
   }
}
@media (max-width: 575.98px) {
   .mobile_none {
      display: none;
   }
   .nft_image_item {
      width: 100%;
      height: fit-content;
      margin: 5% auto 50px;

      .slider_images_wrapper_item {
         width: inherit !important;
         height: inherit !important;
      }
   }
   .preview {
      padding-top: 60px;
   }
}

@media (min-width: 576px) and (max-width: 991.98px) {
   .nft_image_item {
      margin: 20% auto 100px;
   }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
   .nft_image_item.desktop {
      margin: 105px auto 0px;
   }
}
@media (max-width: 991.98px) {
   .desktop {
      display: none;
   }
   .employees_mobile {
      display: flex;
   }
}
</style>
