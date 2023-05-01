<script setup>
import { onMounted } from "vue";
import { allScripts } from "@/assets/js/allScripts.js";

onMounted(() => {
   allScripts();
});
</script>

<template>
   <Header />
   <Main />
   <Footer />
</template>
