<script setup>
import { inject, onMounted } from "vue";
const $gsap = inject("$gsap");

onMounted(() => {
  // 建立 time line
  const srollTL = $gsap.gsap.timeline({
    scrollTrigger: {
      trigger: "#Section1",
      pin: true,
      scrub: true,
    },
  });

  // step1 雲、人移動
  srollTL.to(".clound-r1", { xPercent: "100", opacity: 0.5});
  srollTL.to(".clound-r2", { xPercent: "150", opacity: 0.5 }, "<");
  srollTL.to(".clound-l1", { xPercent: "-100", opacity: 0.5 }, "<");
  srollTL.to(".clound-l2", { xPercent: "-150", opacity: 0.5 }, "<");
  srollTL.to(".man", {yPercent: "10", scale: 0.9}, "<");
  
  // step2 持續顯示 info
  srollTL.to(".lavel-info-area", { opacity: 1 , duration: 1}); // 延長

  // step3 隱藏 info 顯示 山1
  srollTL.to(".lavel-info-area", { opacity: 0 });
  srollTL.to(".mask-mountain-area", { opacity: 1 }, "<");
  srollTL.to(".mountain-1", { opacity: 1 }, "<");
  srollTL.from(".mountain-text-1", { xPercent: "-150" }, "<");
  srollTL.to(".mountain-text-1", { opacity: 1 }, "<");
  srollTL.to(".mountain-1", { opacity: 1,  duration: 2});
  // 山2
  srollTL.to(".mountain-2", { opacity: 1 });
  srollTL.from(".mountain-text-2", { yPercent: "150" }, "<");
  srollTL.to(".mountain-text-2", { opacity: 1 }, "<");
  srollTL.to(".mountain-1", { opacity: 0 }, "<");
  srollTL.to(".mountain-text-1", { opacity: 0 }, "<");
  srollTL.to(".mountain-2", { opacity: 1,  duration: 2});
  // 山3
  srollTL.to(".mountain-3", { opacity: 1 });
  srollTL.from(".mountain-text-3", { xPercent: "150" }, "<");
  srollTL.to(".mountain-text-3", { opacity: 1 }, "<");
  srollTL.to(".mountain-2", { opacity: 0 }, "<");
  srollTL.to(".mountain-text-2", { opacity: 0 }, "<");
  srollTL.to(".mountain-3", { opacity: 1,  duration: 3});

  // step4 恢復
  srollTL.to(".mask-mountain-area", { opacity: 0 });
  srollTL.to(".lavel-info-area", { opacity: 1}, "<");
  srollTL.to(".lavel-info-area", { opacity: 1});
});
</script>

<template lang="pug">
section#Section1
  .header-area 
    .logo-area
      img(src="@/assets/section1/f2e_logo.png")
    .menu-area
      .link-btn {{"關卡資訊"}}
      .link-btn {{"作品列表"}}
      .link-btn {{"攻略資源"}}
      .link-btn {{"求職專區"}}
    .tool-area
      .link-btn.pop {{"Sign in"}}
      .link-btn.w-c.pop {{"Login"}}
  //-------------------------------------
  img.main-bg(src="@/assets/section1/bg.jpg")
  //-------------------------------------
  .mask-mountain-area
    img.mountain-1(src="@/assets/section1/mountain_1.png")
    .text-group.mountain-text-1
      .t1 {{"羨慕別人的酷酷網頁動畫？"}}
      .t2 {{"動畫山"}}
    img.mountain-2(src="@/assets/section1/mountain_2.png")
    .text-group.mountain-text-2
      .t1 {{"滿足不了同事的許願？"}}
      .t2 {{"許願山"}}
    img.mountain-3(src="@/assets/section1/mountain_3.png")
    .text-group.mountain-text-3
      .t1 {{"動畫技能樹太雜無從下手？"}}
      .t2 {{"技能山"}}
  //-------------------------------------
  //-------------------------------------
  .lavel-info-area
    .typing1
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
  overflow: hidden;
  
  .header-area {
    position: absolute;
    width: calc(100vw - 120px);
    z-index: 99;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "logo menu tool";
    align-items: center;
    padding: 60px;
    .logo-area {
      grid-area: logo;
    }
    .menu-area {
      grid-area: menu;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 33px;
    }
    .tool-area {
      grid-area: tool;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 40px;
    }
  }
 
  .mask-mountain-area {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.65);
  }
  .lavel-info-area {
    z-index: 0;
    position: absolute;
    top: 25%;
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
  //--------------------------
  .text-group {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    opacity: 0;
    .t1 {
      font-weight: 500;
      font-size: 20px;
    }
    .t2 {
      font-weight: 700;
      font-size: 96px;
    }
  }
  .mountain-text-1 {
    top: 30%;
    right: 20%
  }
  .mountain-text-2 {
    top: 18%;
    left: 50%;
    transform: translateX(-50%);
  }
  .mountain-text-3 {
    top: 30%;
    left: 20%
  }
  //-------------------------
  .link-btn {
    @extend .btn-basic;
    color: black;
    font-weight: 500;
    font-size: 15px; 
  }
  .w-c {
    color: white;
  }
  .pop {
    font-family: "Poppins";
  }
}
</style>
