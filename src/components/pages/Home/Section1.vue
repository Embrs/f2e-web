<script setup>
import {  inject, onMounted } from "vue";
const $gsap = inject("$gsap");

onMounted(() => {
  console.log($gsap);
  // 建立 time line
  const srollTL = $gsap.timeline({
    scrollTrigger: {
      trigger: "#Section1",
      pin: true,
      markers: true,
      scrub: true,
    },
  });

  // step1 雲、人移動
  srollTL.to(".clound-r1", { xPercent: "100", opacity: 0.5});
  srollTL.to(".clound-r2", { xPercent: "150", opacity: 0.5 }, "<");
  srollTL.to(".clound-l1", { xPercent: "-100", opacity: 0.5 }, "<");
  srollTL.to(".clound-l2", { xPercent: "-150", opacity: 0.5 }, "<");
  srollTL.from(".man", { yPercent: "-10", scale: 1.2 }, "<");
  // step2 mask
  srollTL.to(".lavel-info-area", { opacity: 0 });

  srollTL.to(".mask-mountain-area", { opacity: 1 });
  srollTL.to(".mountain-1", { opacity: 1 }, "<");
  srollTL.to(".mountain-2", { opacity: 1 });
  srollTL.to(".mountain-1", { opacity: 0 }, "<");
  srollTL.to(".mountain-3", { opacity: 1 });
  srollTL.to(".mountain-2", { opacity: 0 }, "<");
  // srollTL.to(".lavel-info-area", { opacity: 0 });
  // srollTL.from(".mask-mountain-area", { opacity: 0 });
  // srollTL.from(".mountain-2", { opacity: 0 }, "<");
  // srollTL.to(".lavel-info-area", { opacity: 0 });
  // srollTL.from(".mask-mountain-area", { opacity: 0 });
  // srollTL.from(".mountain-3", { opacity: 0 }, "<");
});
</script>

<template lang="pug">
section#Section1
  img.main-bg(src="@/assets/section1/bg.jpg")
  //-------------------------------------
  .mask-mountain-area
    img.mountain-1(src="@/assets/section1/mountain_1.png")
    img.mountain-2(src="@/assets/section1/mountain_2.png")
    img.mountain-3(src="@/assets/section1/mountain_3.png")
  //-------------------------------------
  //-------------------------------------
  .lavel-info-area
    .lavel-title-1 {{"互動式網頁設計"}}
    .lavel-title-2 {{"2022 TheF2E"}}
    .lavel-title-3 {{"前端 & UI 修煉精神時光屋"}}
    .lavel-btn {{"關卡資訊 ➤"}}
  //-------------------------------------
  .man-area
    img.man(src="@/assets/section1/man.png")
  //-------------------------------------
  .clound-area
    img.clound-r1(src="@/assets/section1/clouds_1.png")
    img.clound-l1(src="@/assets/section1/clouds_2.png")
    img.clound-r2(src="@/assets/section1/clouds_3.png")
    img.clound-l2(src="@/assets/section1/clouds_1.png")
  //------------------------------------

</template>

<style lang="scss" scoped>
// 排版
#Section1 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #666;
 
  .mask-mountain-area {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .lavel-info-area {
    z-index: 0;
    position: absolute;
    top: 15%;
    left: 50vw;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }
  .man-area {
    z-index: 1;
  }
  .clound-area {
    z-index: 2;
  }
}

// 元件
#Section1
{
  img {
    display: block;
  }
  //--------------------------
  .main-bg,.man,.mountain-1,.mountain-2,.mountain-3{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mountain-1,.mountain-2,.mountain-3 {
    opacity: 0;
  }
  .man {
    transform: translateX(-1.5%);
  }
  //--------------------------
  .cloud-basic {
    position: absolute;
    height: 100vh;
    top: 0;
  }
  .btn-basic {
    cursor: pointer;
    user-select: none;
    &:active {
      transform: scale(0.98);
    }
  }
  //--------------------------
  .clound-r1 {
    @extend .cloud-basic;
    transform: scaleY(-1);
    right: 0;
  }
  .clound-l1 {
    @extend .cloud-basic;
    transform: scaleY(-1);
    left: 0;
  }
  .clound-r2 {
    @extend .cloud-basic;
    // transform: scaleX(-1);
    // transform: scaleY(-1);
    right: 0;
  }
  .clound-l2 {
    @extend .cloud-basic;
    transform: scaleX(-1);
    left: 0;
  }
  .lavel-title-1 {
    font-size: 24px;
    font-weight: 500;
  }
  .lavel-title-2 {
    font-size: 96px;
    font-weight: 700;
  }
  .lavel-title-3 {
    font-size: 20px;
    font-weight: 500;
  }
  .lavel-btn {
    margin-top: 30px;
    
    @extend .btn-basic;
    width: 197px;
    height: 56px;  

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(90deg, #ADE5E5 -1.36%, #54B8FF 105.62%);
    box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
    border-radius: 18px;

    font-weight: 700;
    font-size: 24px;
    color: white;
    line-height: 10px;
    letter-spacing: 2px;
  }
}
</style>
