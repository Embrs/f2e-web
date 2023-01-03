<script setup>
// 首頁 📄
// import Section1 from "@/components/pages/Home/Section1.vue";
// import Section2 from "@/components/pages/Home/Section2.vue";
// import Section3 from "@/components/pages/Home/Section3.vue";
import Section4 from "@/components/pages/Home/Section4.vue";
</script>

<template lang="pug">
#Homoe
  //- Section1
  //- Section2
  //- Section3
  Section4
  p(v-for="i of 50" :key="i") {{ i }}
</template>

<style lang="scss" scoped>
#Homoe {

}
</style>