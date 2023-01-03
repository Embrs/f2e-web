<script setup>
import { inject, onMounted } from "vue";
import avatar1 from "@/assets/section2/p_1.jpg";
import avatar2 from "@/assets/section2/p_2.jpg";
import avatar3 from "@/assets/section2/p_3.jpg";
import avatar4 from "@/assets/section2/p_4.jpg";

const $gsap = inject("$gsap");
const cardInfoList = [
  {
    avatar: avatar1,
    t1: "網站的動態趨勢",
    t2: "11/3（四）20:00 ~ 21:30",
    t3: "版塊設計創辦人暨設計總監",
    name: "李明"
  },
  {
    avatar: avatar2,
    t1: "jQuery 也可以做到的互動效果",
    t2: "11/10（四）20:00 ~ 21:30",
    t3: "Angular Taiwan 傳教士",
    name: "LEO"
  },
  {
    avatar: avatar3,
    t1: "做事不能拖拖拉拉，但網頁可以 draggable.js 介紹",
    t2: "11/17（四）20:00 ~ 21:30",
    t3: "前端工程師",
    name: "邱繼緯"
  },
  {
    avatar: avatar4,
    t1: "互動式網頁設計工程師該具備哪些技能？",
    t2: "11/24（四）20:00 ~ 21:30",
    t3: "墨雨互動設計 創辦人、生成式藝術家",
    name: "吳哲宇"
  }
];


onMounted(() => {
  // 背景文字循環
  $gsap.gsap.to(".l-loop", { xPercent: "-50", ease: "none", duration: 10, repeat: -1 });
  $gsap.gsap.to(".r-loop", { xPercent: "50", ease: "none", duration: 10, repeat: -1 });
  
  // 動畫
  const Animated = (element) => {
    let x = 0;
    //依照條件設定x初始值
    x = element.classList.contains("card-right")? 100: -100;
    //設定元素初始值
    element.style.transform = `translate(${x}px, ${x/2}px)`;
    $gsap.gsap.fromTo(
      element,
      { x: x, y: x/2, opacity: 0, visibility: "hidden" },
      {
        x: 0, y: 0, opacity: 1, visibility: "visible",
        delay: 0.2, duration: 1, ease: "expo", overwrite: "auto",
      }
    );
  };

  // 隱藏
  const Hide = (el) => {
    $gsap.gsap.set(el, { opacity: 0, visibility: "hidden" });
  };

  // 卡片切入
  $gsap.gsap.utils.toArray(".card-item").forEach((el) => {
    $gsap.ScrollTrigger.create({
        trigger: el,
        onEnter: function () { Animated(el); },
        onEnterBack: function () { Animated(el); },
        onLeave: function () { Hide(el); },
      });
  });
});

</script>

<template lang="pug">
section#Section2
  .title-area
    .main-title {{"F2E大神帶你練功"}}
  .loop-area
    .loop-text(
      v-for="i of 3" :key="i"
      :class=" i % 2 === 0 ? 'l-loop' : 'r-loop'"
    ) {{"THE F2E THE F2E THE F2E THE F2E THE F2E THE F2E THE F2E THE F2E THE F2E THE F2E THE F2E"}}
    
  .introduce-area
    .card-item(
      v-for="(cardInfo, index) of cardInfoList"
      :key="cardInfo.name"
      :class="index%2===0? 'card-left': 'card-right'"
    )
      .card-box
        .avatar-area
          .img-box
            img(:src="cardInfo.avatar")
        .info-area
          .t1 {{cardInfo.t1}}
          .t2 {{cardInfo.t2}}
          .t-row
            .t3 {{cardInfo.t3}}
            .name {{cardInfo.name}}

</template>

<style lang="scss" scoped>
// 排版
#Section2 {
  width: 100vw;
  position: relative;
  padding: 147px 0;  
  .title-area {
    display: flex;
    justify-content: center;
    padding-bottom: 147px;  
  }
  .loop-area {
    position: absolute;
    z-index: 0;
    width: 100vw;
    top: 80vh;
    transform: rotate(-20deg);
  }
  .introduce-area {
    width: calc(100vw - 165px);
    position: relative;
    z-index: 1;
    display: grid;
    gap: 70px;
    padding: 0 80px ;
    
    .card-item {
      display: flex;
      &:nth-child(odd){
        justify-content: flex-start;
      }
      &:nth-child(even){
        justify-content: flex-end;
      }
    }
    
  }
}

// 元件
#Section2
{
  .main-title {
    font-family: "Dela Gothic One";
    font-weight: 700;
    font-size: 128px;
    -webkit-text-stroke: 1px #8DB7CD;
    color: transparent;
  }
  .loop-text {
    font-weight: 700;
    font-size: 128px;
    line-height: 120px;
    display: inline-block;
    font-family: "Dela Gothic One";
    color: transparent;
    white-space: nowrap;
    height: 100%;
    -webkit-text-stroke: 1px #8DB7CD;
  }
  .r-loop {
    transform: translateX(-200vw);
  }
  .card-box {
    max-width: 1000px;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 20px 40px;
    background: white;
    border: 1px solid #87D2F0;
    border-radius: 18px;

    .avatar-area {
      width: 240px;
      display: flex;
      justify-content: center;
      .img-box {
        width: 190px;
        height: 190px;
        border-radius: 200px;
        overflow: hidden;
        border: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 0 6px #87D2F0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        } 
      }
    }
    .info-area {  
      color: #87D2F0;
      font-weight: 700;
      .t-row {
        display: flex;
        align-items: flex-end;
        gap: 20px;
      }
      .t1 {
        font-size: 48px;
        line-height: 55px;
      }
      .t2 {font-size: 32px;}
      .t3 {font-size: 20px;}
      .name {font-size: 24px;}
    }
  }
}
</style>
