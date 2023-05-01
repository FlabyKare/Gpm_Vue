<template>
   <section class="benefits app_info white_mode_color" loading="lazy">
      <aside class="medicine app_info_wrapper container" loading="lazy">
         <div
            class="slider_images_wrapper desktop medicine_goods animation_fromLeft_to_right element-animation"
            loading="lazy"
         >
            <img
               width="130"
               height="170"
               class="slider_images_wrapper_item medicine_images"
               src="@/assets/img/Main/Benefits/1.webp"
               alt="The first item of medication"
               loading="lazy"
            />
            <img
               width="130"
               height="170"
               class="showing slider_images_wrapper_item medicine_images"
               src="@/assets/img/Main/Benefits/2.webp"
               alt="The second item of medication"
               loading="lazy"
            />
            <img
               width="130"
               height="170"
               class="slider_images_wrapper_item third_image medicine_images"
               src="@/assets/img/Main/Benefits/3.webp"
               alt="The third item of medication"
               loading="lazy"
            />
         </div>
         <article>
            <h3
               class="default_title animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Get up to 70% discount on selected products.
            </h3>
            <p
               class="default_text animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Register now and take advantage of numerous discounted products.
               By signing up, you'll have access to exclusive offers and be able
               to earn points by purchasing products or simply by being an
               active member. Unlock even better deals when you reach higher
               loyalty levels and enjoy the rewards of being a valued customer.
            </p>
            <div
               class="slider_images_wrapper employees_mobile medicine_goods animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               <img
                  width="130"
                  height="170"
                  class="slider_images_wrapper_item medicine_images"
                  src="@/assets/img/Main/Benefits/1-mobile.webp"
                  alt="The first item of medication"
                  loading="lazy"
               />
               <img
                  width="130"
                  height="170"
                  class="showing slider_images_wrapper_item medicine_images"
                  src="@/assets/img/Main/Benefits/2-mobile.webp"
                  alt="The second item of medication"
                  loading="lazy"
               />
               <img
                  width="130"
                  height="170"
                  class="slider_images_wrapper_item third_image medicine_images"
                  src="@/assets/img/Main/Benefits/3-mobile.webp"
                  alt="The third item of medication"
                  loading="lazy"
               />
            </div>
            <Ubutton
               class="intro_btn animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               Get started for free</Ubutton
            >
         </article>
         <div class="box" loading="lazy"></div>
      </aside>

      <aside class="hotel app_info_wrapper container" loading="lazy">
         <div
            class="hotel_slider slider_images_wrapper desktop medicine_goods animation_fromLeft_to_right element-animation"
            loading="lazy"
         >
            <img
               width="477"
               height="260"
               class="slider_images_wrapper_item hotel_images"
               src="@/assets/img/Main/Benefits/2_hotel.webp"
               alt="Second shot of the hotel"
               loading="lazy"
            />
            <img
               width="477"
               height="260"
               class="showing slider_images_wrapper_item hotel_images"
               src="@/assets/img/Main/Benefits/1_hotel.webp"
               alt="First shot of the hotel"
               loading="lazy"
            />
         </div>
         <div class="box box2" loading="lazy"></div>

         <article>
            <h3
               class="default_title animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Over 2M hotels worldwide, up to 70% off!
            </h3>
            <p
               class="default_text animation_fromRight_to_left element-animation"
               loading="lazy"
            >
               Take advantage of GPM.Travel now and get up to 70% off for your
               next stay. With an extensive selection of more than 2M hotels and
               resorts around the world, you'll be able to find the ideal
               destination for your next holiday! Register now and start making
               the most of your vacation with GPM.Travel!
            </p>
            <div
               class="slider_images_wrapper employees_mobile hotel_slider medicine_goods animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               <img
                  width="477"
                  height="260"
                  class="slider_images_wrapper_item hotel_images"
                  src="@/assets/img/Main/Benefits/2_hotel-mobile.webp"
                  alt="Second shot of the hotel"
                  loading="lazy"
               />
               <img
                  width="477"
                  height="260"
                  class="showing slider_images_wrapper_item hotel_images"
                  src="@/assets/img/Main/Benefits/1_hotel-mobile.webp"
                  alt="Fisrt shot of the hotel"
                  loading="lazy"
               />
            </div>
            <Ubutton
               class="intro_btn animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               Get started for free</Ubutton
            >
         </article>
      </aside>
   </section>
</template>

<script></script>

<style lang="scss" scoped>
@import "@/assets/common/defaultSection";
.box {
   position: absolute;
   bottom: auto;
   top: 35px;
   left: auto;
   right: 400px;
   filter: blur(130px);
   z-index: -1 !important;
   @media (max-width: 1199.98px) {
      top: 535px;
      left: auto;
      right: 300px;
   }
}
.box2 {
   position: absolute;
   bottom: 35px;
   top: auto;
   left: 200px;
   right: auto;
   filter: blur(130px);
   z-index: -1 !important;
   @media (max-width: 1199.98px) {
      bottom: 235px;
   }
}
.slider_images_wrapper {
   position: relative;

   width: 465px;
   height: 360px;

   display: flex;
   flex-direction: row;
   gap: 15px;
   justify-content: space-between;
   &.hotel_slider {
      height: auto;
   }
   .slider_images_wrapper_item {
      width: 230px;
      height: 280px;
      &.showing {
         width: 290px;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         z-index: 5;
         //  transition: 0.5s;
      }
   }
   .medicine_images.showing {
      height: 420px !important;
   }
   .slider_images_wrapper_item.hotel_images {
      width: 475px;
      height: 260px;
      &.showing {
         width: 475px;
         height: 260px;
         transform: translate(-45%, -70%) !important;
      }
   }
}

.app_info {
   margin-top: 0;
   padding: 110px 0 100px;
}

.hotel {
   margin-top: 140px;
   flex-direction: row-reverse;
   align-items: center;
}

.intro_btn {
   min-width: 240px;
}

@media (max-width: 575.98px) {
   .medicine_goods {
      width: 100%;
      height: fit-content;
      margin: 20% auto 50px;

      .slider_images_wrapper_item {
         width: 130px;
         height: 170px;
         &.showing {
            width: 165px !important;
            height: 220px !important;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 5;
            //  transition: 0.5s;
         }
      }
   }

   .slider_images_wrapper_item.hotel_images {
      width: 100% !important;
      height: auto !important;
      &.showing {
         width: 100% !important;
         height: auto !important;
         transform: translate(-45%, -70%) !important;
      }
   }
   .preview {
      padding-top: 60px;
   }
}

@media (min-width: 576px) and (max-width: 991.98px) {
   .medicine_goods {
      margin: 20% auto 100px;
   }
   .hotel_slider {
      margin-bottom: 35px;
   }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
   .medicine_goods.desktop {
      margin: 35px auto 80px;
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
