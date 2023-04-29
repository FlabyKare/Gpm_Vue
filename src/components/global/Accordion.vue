<template>
   <ul class="accordion-list container" loading="lazy">
      <li
         v-for="(item, index) in items"
         :key="index"
         @click="toggleAccordion(index)"
         :class="{
            active: item.active,
         }"
         loading="lazy"
      >
         <div class="accordion-list-title" loading="lazy">
            <h2
               class="question animation_fromLeft_to_right element-animation"
               loading="lazy"
            >
               {{ item.question }}
            </h2>
            <svg
               class="animation_fromRight_to_left element-animation"
               width="18"
               height="17"
               viewBox="0 0 18 17"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               loading="lazy"
            >
               <path
                  class="path white_mode_color"
                  :d="item.active ? path1 : path2"
                  fill="white"
               />
            </svg>
         </div>
         <p class="answer" :class="{ hidden: !item.active }" loading="lazy">
            {{ item.answer }}
         </p>
         <img
            class="animation_fromRight_to_left element-animation whiteLine white_mode_color"
            src="@/assets/img/Main/Accordion/Question_Underline.png"
            alt="Question-Underline"
            loading="lazy"
         />
         <img
            class="animation_fromLeft_to_right element-animation blackLine white_mode_color"
            src="@/assets/img/Main/Accordion/Question_Underline_Black.png"
            alt="Question-Underline"
            loading="lazy"
         />
      </li>
      <div class="box box2" loading="lazy"></div>
      <div class="box box3" loading="lazy"></div>
      <div class="box box4" loading="lazy"></div>
   </ul>
</template>
<script>
export default {
   data() {
      return {
         path1: "M17.024 3.002H10.108H6.916H0V0H6.916L10.108 0.000155449L17.024 0V3.002Z",
         path2: "M17.024 9.842H10.108V16.644H6.916V9.842H0V6.84H6.916V0H10.108V6.84H17.024V9.842Z",
         items: [
            {
               question: "Question 1",
               answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
               active: false,
            },
            {
               question: "Question 2",
               answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
               active: false,
            },
            {
               question: "Question 3",
               answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
               active: false,
            },
            {
               question: "Question 4",
               answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
               active: false,
            },
         ],
      };
   },
   methods: {
      toggleAccordion(index) {
         this.items.forEach((item, i) => {
            if (i === index) {
               item.active = !item.active;
            } else {
               item.active = false;
            }
         });
      },
   },
};
</script>
<style lang="scss" scoped>
@import "@/assets/common/fonts";
* {
   z-index: 2;
   position: inherit;
}
.box {
   position: absolute;
   bottom: auto;
   top: 235px;
   left: auto;
   right: 400px;
   filter: blur(130px);
   z-index: -1 !important;
}

.box2 {
   top: -300px;
   left: auto;
   right: -400px;
   filter: blur(150px);
}
.box3 {
   top: 320px;
   left: -300px;
   right: auto;
   filter: blur(100px);
   @media (max-width: 991.98px) {
      left: 0 !important;
   }
}
.box4 {
   top: auto;
   bottom: -600px;
   left: auto;
   right: -200px;
   filter: blur(100px);
   @media (max-width: 991.98px) {
      right: 0 !important;
      bottom: -800px;
   }
}
@media (max-width: 991.98px) {
   .box {
      left: auto;
      right: auto;
   }
}
.accordion-list {
   padding: 0 20px 200px;
   position: relative;
}
.accordion-list-title {
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
}
li {
   position: relative;
   width: 100%;
   * {
      transition: 0.5s;
   }
   img {
      width: 85%;
      height: 3px;
      display: block;
      margin: 20px auto 10px 60px;
      opacity: 0.4;
      &.whiteLine.white_mode_color.active {
         display: none;
      }
      &.blackLine.white_mode_color {
         display: none;
         &.active {
            display: block;
         }
      }
   }
}
.path.white_mode_color.active {
   fill: #000;
}
.question {
   font-family: $Poppins;
   font-weight: 800;
   font-size: 24px;
   line-height: 48px;
   color: #ffffff;

   cursor: pointer;
}
.answer {
   margin-bottom: 30px;

   position: initial;
   opacity: 1;
   width: fit-content;
   height: fit-content;

   font-family: $Poppins;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #ffffff;
   cursor: pointer;
   hyphens: auto;
}

.hidden {
   position: absolute;
   top: 0;
   left: 0;

   width: 0;
   height: 0;
   opacity: 0;
   overflow: hidden;
}

@media (min-width: 320px) and (max-width: 576.98px) {
   li {
      img {
         margin: 20px auto 10px;
      }
   }
}
@media (min-width: 576px) and (max-width: 767.98px) {
   li {
      img {
         margin: 20px auto 10px 30px;
      }
   }
}
@media (min-width: 768px) and (max-width: 991.98px) {
   li {
      img {
         margin: 20px auto 10px 60px;
      }
   }
}
</style>
