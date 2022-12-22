<script setup>
// Demo4 📄
import VanillaTilt from"vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  VanillaTilt.init(document.querySelector(".main-bg"), {
		max: 25,
		speed: 400
	});
});
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
#Demo4
  .main-bg(data-tilt-scale="1.1")
    img(src="@/assets/section1/bg.jpg")
    .text AABBCC
</template>

<style lang="scss" scoped>
// 排版
#Demo4 {
  padding: 50px;
}

// 元件
#Demo4
{
  .main-bg {
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform-style: preserve-3d;
    // transform: perspective(2000px);

    img {
      position:absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      position: relative;
      z-index: 1;
      transform: translateZ(20px);
      color: white;
      font-size: 40px;
      font-weight: 900;
    }
  }
}
</style>
