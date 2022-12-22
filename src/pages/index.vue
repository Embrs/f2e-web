<script setup>
// 首頁 📄
import Section1 from "@/components/pages/Home/Section1.vue";
import Section2 from "@/components/pages/Home/Section2.vue";
</script>

<template lang="pug">
#Homoe
  Section1
  Section2
  p(v-for="i of 50" :key="i") {{ i }}
</template>

<style lang="scss" scoped>
#Homoe {

}
</style>