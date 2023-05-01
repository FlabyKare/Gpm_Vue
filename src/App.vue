<script setup>
import { onMounted } from "vue";
// import allFunctions from "@/assets/js/allFunctions.js";

onMounted(() => {
   //    allFunctions();
   window.addEventListener("load", () => {
      document.body.classList.add("preloader");
      setTimeout(() => {
         document.body.classList.remove("preloader");
      }, 250);
   });
});
</script>

<template>
   <Header />
   <Main />
   <Footer />
</template>
