<script setup>
// Demo2 📄
import { inject, onMounted } from "vue";
const $gsap = inject("$gsap");

onMounted(() => {
  // gsap.registerPlugin(ScrollTrigger, TextPlugin);
  const scrollTL = $gsap.gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      pin: true,
      markers: true,
      scrub: true,
    },
  });
  
  scrollTL.to(".gate-left-1", { yPercent: "-100" });
  scrollTL.to(".gate-right-1", { yPercent: "100" }, "<");
  scrollTL.to(".gate-left-2", { yPercent: "-100" });
  scrollTL.to(".gate-right-2", { yPercent: "100" }, "<");
});
</script>

<template lang="pug">
#Demo2
  p(v-for="i of 100" :key="i") {{ i }}
  section.section3
    .gate.gate-left.gate-left-1.z-20
      i.fa-solid.fa-house
      
    .gate.gate-right.gate-right-1.z-20
      h2 WEEK 1
      
    .gate.gate-left.gate-left-2.z-10
      i.fa-solid.fa-cloud
      
    .gate.gate-right.gate-right-2.z-10
      h2 WEEK 2
      
    .gate.gate-left.gate-left-3.z-0
      i.fa-solid.fa-location-dot
      
    .gate.gate-right.gate-right-3.z-0
      h2 WEEK 3
  p(v-for="i of 100" :key="i") {{ i }}
</template>

<style lang="scss" scoped>
#Demo2 {
  .section3 {
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  i {
    font-size: 10rem;
  }
  .gate {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .gate-left {
    left: 0;
  }
  .gate-right {
    right: 0;
  }

  .gate-right-1 {
    background-color: #ffe7a9;
  }
  .gate-right-1 > i {
    color: #69f0ae;
  }
  .gate-left-1 {
    background-color: #e7ffa9;
  }
  .gate-left-1 > i {
    color: #ffa09d;
  }

  .gate-right-2 {
    background-color: #559496;
  }
  .gate-right-2 > i {
    color: #69f0ae;
  }
  .gate-left-2 {
    background-color: #005f62;
  }
  .gate-left-2 > i {
    color: #ffa09d;
  }

  .gate-right-3 {
    background-color: #69f0ae;
  }
  .gate-right-3 > i {
    color: #69f0ae;
  }
  .gate-left-3 {
    background-color: #ddfbed;
  }
  .gate-left-3 > i {
    color: #ffa09d
  }
}
</style>