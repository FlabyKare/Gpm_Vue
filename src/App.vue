<script setup>
import { onMounted } from "vue";
// import allScripts from "@/assets/js/script.js";

onMounted(() => {
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
