<script setup>
// Demo1 📄
import { inject, onMounted } from "vue";
const $gsap = inject("$gsap");

onMounted(() => {
  const tl = $gsap.gsap.timeline({
    scrollTrigger: {
      trigger: ".box1", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: false, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "top 20%", // 決定動畫開始點的位置
      end: "top 1%", // 決定動畫結束點的位置
      scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
    },
  });

  tl.to(".box1", {
    // top: "0", // 距外層容器top 0px
    left: "50%", // 距外層容器left 50%
    xPercent: "-50", // translate(-50%, 0)
    duration: 10, // 動畫持續時間之比例
    position: "absolute", // position: 'absolute'，絕對位置才能使用left, right...等
  }).to(".box1", {
    top: "100%",
    yPercent: "-100", // translate(0, -100%)
    duration: 20,
    position: "absolute",
  });
});
</script>

<template lang="pug">
#Demo1
  section.section1
    .container1
      .box1 
  //- section.section2
  p(v-for="i of 100" :key="i") {{ i }}
  
  section.section3
</template>

<style lang="scss" scoped>
#Demo1 {
  .section1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height:  100vh;
    background-color: #fd89b9;
  }

  .container1 {
    position: relative;
    margin-bottom: -100px;
    width: 50%;
    height: 40%;
    background-color: #fff;
    border: 1px solid #000;
  }

  .box1 {
    width: 100px;
    height: 100px;
    background-color: #165e83;
  }

  .row {
    display: flex;
  }
}
</style>