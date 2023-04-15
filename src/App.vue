<script setup>
import { onMounted } from "vue";
import allScripts from "@/assets/js/script.js";

onMounted(() => {
   allScripts(); // <div>
});
</script>

<template>
   <NavComponent />
</template>
