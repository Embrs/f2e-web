<script setup>
import { inject, onMounted } from "vue";
const $gsap = inject("$gsap");


onMounted(() => {
  const scrollTL = $gsap.gsap.timeline({
    scrollTrigger: {
      trigger: "#Section3",
      pin: true,
      scrub: true,
      duration: 200
    },
  });

  for (let i = 1; i< 4; i++) {
    scrollTL.to(`.l-${i}`, { yPercent: "-100" });
    scrollTL.to(`.r-${i}`, { yPercent: "100" }, "<");
  }

  for (let i = 1; i< 3; i++) {
    scrollTL.to(`.h-l-${i}`, { xPercent: "-100" });
    scrollTL.to(`.h-r-${i}`, { xPercent: "-200" }, "<");
  }
});
// Section3 📄
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
section#Section3
  .level-area.z-50
    .gate.l-1.l-c
      .text-box
        .t1 {{ "WEEK 1" }}
        .t2 {{ "The F2E 活動網站設計視差滾動\n# 版塊設計" }}
    .gate.r-1.r-c
      img.fill-img(src="@/assets/section3/bg_1.jpg")
  .level-area.z-40
    .gate.l-2.l-c
      img.fill-img(src="@/assets/section3/bg_2.jpg")
    .gate.r-2.r-c
      .text-box
        .t1 {{ "WEEK 2" }}
        .t2 {{ "今晚，我想來點點簽\ncanvas\n# 凱鈿行動科技" }}
  .level-area.z-30
    .gate.l-3.l-c
      .text-box
        .t1 {{ "WEEK 3" }}
        .t2 {{ "Scrum 新手村\nJS draggable\n# 新加坡商鈦坦科技" }}
    .gate.r-3.r-c
      img.fill-img(src="@/assets/section3/bg_3.jpg")
  //------------------------------------
  .level-area.z-20
    .gate.h-l-1.l-c
      .text-box
        .t1 {{ "WEEK 1" }}
        .t2 {{ "The F2E 活動網站設計視差滾動\n# 版塊設計" }}
    .gate.h-r-1.w-c
      img.s-img(src="@/assets/section3/hbg_1.jpg")
  .level-area.z-10
    .gate.h-l-2.w-c
      img.s-img(src="@/assets/section3/hbg_2.jpg")
    .gate.h-r-2.r-c
      .text-box
        .t1 {{ "WEEK 2" }}
        .t2 {{ "今晚，我想來點點簽\ncanvas\n# 凱鈿行動科技" }}
  .level-area.z-0
    .gate.h-l-3.l-c
      .text-box
        .t1 {{ "WEEK 3" }}
        .t2 {{ "Scrum 新手村\nJS draggable\n# 新加坡商鈦坦科技" }}
    .gate.h-r-13.w-c
      img.s-img(src="@/assets/section3/hbg_3.jpg")

  p Section3
</template>

<style lang="scss" scoped>
// 排版
#Section3 {
  position: relative;
  height: 100vh;
  width: 100vw;;
  overflow: hidden;
  .level-area {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    top: 0
  }
}

// 元件
#Section3
{
  .gate {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    overflow: hidden;
    color: #87D2F0;
    background-color: linear-gradient(291.75deg, #91D7EE 6.23%, rgba(145, 215, 238, 0) 100.91%);
  }
  .l-c {
    background-color: rgb(222, 255, 248);
  }
  .r-c {
    background-color: rgb(254, 255, 209);
  }
  .w-c {
    background-color: white;
  }

  .fill-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .s-img {
    width: 80%;
  }
    
  .text-box {
    max-width: 80%;
    color: black;
    white-space: pre-wrap;
    word-wrap: break-word;
    .t1 {
      font-weight: 700;
      font-size: 96px;
    }
    .t2 {
      font-weight: 700;
      font-size: 48px;
    }
  }
  @for $i from 0 through 5 {
    .z-#{$i * 10} {
      z-index: #{$i * 10};
    }
  }
}
</style>
