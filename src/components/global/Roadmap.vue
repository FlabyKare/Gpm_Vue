<template>
   <section class="roadmap" loading="lazy">
      <img
         width="1435"
         height="280"
         class="desktop white_mode_color animation_fromLeft_to_right element-animation"
         src="@/assets/img/Main/Roadmap_Image.webp"
         alt="Image of roadmap on the desktop"
         loading="lazy"
      />
      <img
         class="mobile"
         width="210"
         height="480"
         src="@/assets/img/Main/Mobile_Roadmap_Image.webp"
         alt="Image of roadmap on the mobile"
         loading="lazy"
      />

      <ul id="roadmap_list" class="roadmap_list container" loading="lazy">
         <li
            class="roadmat_list_item animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            <span class="green">Q1</span>
            <p class="roadmap_text">KYC integration</p>
            <p class="roadmap_text">KYC integration</p>
         </li>

         <li
            class="roadmat_list_item animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            <span class="orange">Q2</span>
            <p class="roadmap_text">KYC integration</p>
            <p class="roadmap_text">KYC integration</p>
         </li>

         <li
            class="roadmat_list_item animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            <span class="purple">Q3</span>
            <p class="roadmap_text">KYC integration</p>
            <p class="roadmap_text">KYC integration</p>
         </li>

         <li
            class="roadmat_list_item animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            <span class="yellow">Q4</span>
            <p class="roadmap_text">KYC integration</p>
            <p class="roadmap_text">KYC integration</p>
         </li>

         <li
            class="roadmat_list_item animation_fromRight_to_left element-animation"
            loading="lazy"
         >
            <span class="blue">Q5</span>
            <p class="roadmap_text">KYC integration</p>
            <p class="roadmap_text">KYC integration</p>
         </li>
      </ul>
   </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/common/fonts";

.white_mode_color {
   background: transparent !important;
   color: #fff !important;
}
.img_wrapper {
   width: 100%;
}

.mobile {
   display: none;
}
.roadmap {
   //    overflow: hidden;
   position: relative;
   padding-bottom: 200px;
   * {
      z-index: 3;
      position: inherit;
   }
}
.desktop {
   width: 105%;
   height: auto;
   margin-left: -25px;
}
.roadmap_list {
   margin-top: 65px;
   padding: 0 20px;

   display: grid;
   grid-template-columns: repeat(auto-fill, 160px);
   gap: 20px 20px;
   justify-content: space-between;
}
.roadmat_list_item {
   position: relative;

   //    width: 160px;
   width: max-content;
   height: 100px;
   border-radius: 6px;

   padding: 30px 15px;

   background: #393547;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
   cursor: pointer;
   transition: 0.5s !important;

   justify-self: auto;
   &:hover {
      transform: translate(0, 0) scale(1.05) !important;
   }

   * {
      cursor: pointer;
   }
   p {
      font-family: $Poppins;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff !important;
      text-align: center;
      width: 100%;
      * {
         color: #ffffff !important;
      }
   }
   span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -165%);

      font-family: $Poppins;
      font-weight: 900;
      font-size: 20px;
      line-height: 24px;
      color: #3c3c40;
      transition: 0.5s;
      border-radius: 50%;
      padding: 15px;

      &:hover {
         transform: translate(-50%, -165%) scale(1.1);
      }
      &.green {
         background: #7effc1;
         &:hover {
            box-shadow: 0 0 10px 10px rgba(126, 255, 193, 0.5);
         }
      }
      &.orange {
         background: #ffaa5b;
         &:hover {
            box-shadow: 0 0 10px 10px rgba(255, 170, 91, 0.5);
         }
      }
      &.purple {
         background: #a689fb;
         &:hover {
            box-shadow: 0 0 10px 10px rgba(166, 137, 251, 0.5);
         }
      }
      &.yellow {
         background: #fdec58;
         &:hover {
            box-shadow: 0 0 10px 10px rgba(253, 236, 88, 0.5);
         }
      }
      &.blue {
         background: #638fff;
         &:hover {
            box-shadow: 0 0 10px 10px rgba(99, 143, 255, 0.5);
         }
      }
   }
}

@media (max-width: 575.98px) {
   .roadmap {
      display: flex;
      justify-content: end;
      padding: 0 20px 150px;
   }
   .desktop {
      display: none;
   }

   .mobile {
      display: block;
      width: 235px;
      height: 600px;
      position: absolute;
      top: 0%;
      left: 0%;
      transform: translate(5%, 20%);

      z-index: -1;
   }
   .roadmap_list {
      width: 55%;
      margin: 65px 0 0;
      gap: 70px 20px;
      grid-template-columns: repeat(auto-fill, 160px);
      align-self: flex-end;
   }
   .roadmat_list_item {
      padding: 15px 20px;
      height: 80px;
   }
}
@media (max-width: 404.98px) {
   .roadmap_list {
      padding-right: 60%;
   }
}
@media (min-width: 575.98px) and (max-width: 991.98px) {
   .roadmap_list {
      //   width: 50%;
      //   justify-content: space-between;
      //   margin: 65px 0 0;
      gap: 60px 20px;
   }
}
@media (max-width: 768.98px) {
   .roadmat_list_item {
      &:hover {
         transform: scale(1);
      }
   }
}
</style>
