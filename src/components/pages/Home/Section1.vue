<script setup>
import {  onMounted } from "vue";
// const $gsap = inject("$gsap");

onMounted(() => {
  //
});
// Section1 📄
// ====== Utils ===========================================================
// ====== Data ============================================================
// ====== Mixin ===========================================================
// ====== Computed ========================================================
// ====== Methods =========================================================
// ====== Created =========================================================
// ====== Life Cycle ======================================================
// ====== Return ==========================================================
</script>

<template lang="pug">
section#Section1
  img.main-bg(src="@/assets/section1/bg.jpg")
  img.clouds(src="@/assets/section1/clouds_1.png")
  img.clouds(src="@/assets/section1/clouds_2.png")
  img.clouds(src="@/assets/section1/clouds_3.png")

</template>

<style lang="scss" scoped>
// 排版
#Section1 {
  width: 100vw;
  height: 100vh;
}

// 元件
#Section1
{
  img {
    display: block;
  }
  .main-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .clouds {
    position: absolute;
    height: 100vh;
    top: 0;
  }
  .clound-1 {
    @extend .clouds;
  }

  .mountain-1,.mountain-2,.mountain-3,.man {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
