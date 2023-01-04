<script setup>
import { inject, onMounted } from "vue";
const $gsap = inject("$gsap");

const HideEl = (el) => {
  $gsap.gsap.set(el, { opacity: 0, visibility: "hidden" });
};

const AnimatedEl = (el) => {
  let x = -200;
  if (el.classList.contains("card-right"))  {
    x = 200;
  }
  el.style.transform = `translate(${x}px, 0px)`;
  $gsap.gsap.fromTo(
    el,
    { x: x, y: 0, opacity: 0, visibility: "hidden" },
    { x: 0, y: 0, opacity: 1, visibility: "visible", delay: 0.2 }
  );
};
onMounted(() => {
  $gsap.gsap.utils.toArray(".action-card").forEach( (el) => {

    $gsap.ScrollTrigger.create({
        trigger: el,
        onEnter: function () {
          AnimatedEl(el);
        },
        onEnterBack: function () {
          AnimatedEl(el);
        },
        onLeave: function () {
          HideEl(el);
        },
      });
    
  });
});
</script>

<template lang="pug">
#Section4
  .step-area
    img.step-line-img(src="@/assets/section4/step-line.svg")
  .action-card.card-1
    .action-btn {{ "Sign up" }}
    .content {{ "開放報名\n\n10/13 (四) \n早上 11:00 - 11/6 (日) 晚上 23:59" }}
  .action-card.card-2.card-right
    .action-btn {{ "START" }}
    .content {{ "各組別開賽\n\nUI組、團體組開賽 10/31\n前端組開賽 11/7" }}
  .action-card.card-3
    .action-btn {{ "UPLOAD" }}
    .content {{ "登陸作品\n\n10/31 (一) \n中午 12:00 - 11/28 (一) 中午 12:00" }}
  .action-card.card-4.card-right
    .action-btn {{ "STREAM" }}
    .content {{ "線上直播\n\n11/3 - 11/24 (每週四)" }}
</template>

<style lang="scss" scoped>
// 排版
#Section4 {
  width: 100vw;
  padding: 100px 20px;
  position: relative;
}

// 元件
#Section4
{
  .title {
    
  }
  .step-area {
    // position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 100px;
    padding-bottom: 20px;
    .step-line-img {
      width: 60%;
      object-fit: cover;
    }
  }
  .action-card {
    position: absolute;
    display: grid;
    gap: 35px;
    .content {
      font-weight: 700;
      font-size: 32px;
      color: black;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
  }
  .card-right {
    justify-content: flex-end;
    .content {
      text-align: right;
    }
  }
  
  .action-btn {
    font-weight: 700;
    font-size: 48px;
    color: white;
    letter-spacing: 3px;
    
    width: 362px;
    height: 103px;
    
    background: linear-gradient(90deg, #ADE5E5 -1.36%, #54B8FF 105.62%);
    box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-1 {
    top: 10vw;
    left: 10vw;
  }
  .card-2 {
    top: 20vw;
    right: 15vw;
  }
  .card-3 {
    top: 40vw;
    left: 20vw;
  }
  .card-4 {
    top:70vw;
    left: 100px;
    left: 45vw;
  }
}
</style>
