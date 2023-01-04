<script setup>
// Section5 📄
import VanillaTilt from"vanilla-tilt";
import { onMounted } from "vue";

onMounted(() => {
  VanillaTilt.init(document.querySelectorAll(".column-item"), {
		max: 25,
		speed: 400
	});
});
</script>

<template lang="pug">
#Section5
  .title-text {{"區區修煉已經無法滿足了嗎？\n還有比賽等著你！"}}

  .text-card
    .card-title {{"評審機制"}}
    .content-area
      .text-row {{"∙ 初選：將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單"}}
      .text-row {{"∙ 決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單"}}

  .text-card
    .card-title {{"獎項"}}
    .columns-area
      .column-item(data-tilt-scale="1.1")
        .img-area
          img(src="@/assets/section5/badge.png")
        .text-area
          p {{"初選佳作 共六十位"}}
          p.color-blur {{"數位獎狀"}}
          p {{"每週主題個人組十位、團體組十組"}}
      
      .column-item(data-tilt-scale="1.1")
        .img-area
          img(src="@/assets/section5/badge.png")
        .text-area
          p {{"個人企業獎 共六位"}}
          p.color-blur {{"NTD 3,000/位"}}
          p {{"每週主題各 2 名，設計 1 位、前端 1 位"}}
      
      .column-item(data-tilt-scale="1.1")
        .img-area
          img(src="@/assets/section5/badge.png")
        .text-area
          p {{"團體企業獎 共三組"}}
          p.color-blur {{"NTD 10,000/組"}}
          p {{"每週主題各 1 組"}}
  .ps {{"以上皆提供完賽數位獎狀"}}
</template>

<style lang="scss" scoped>
// 排版
#Section5 {
  background: linear-gradient(291.75deg, #91D7EE 6.23%, rgba(145, 215, 238, 0) 100.91%);
  padding: 34px 88px;
}

// 元件
#Section5
{
  .title-text {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    color: black;
    white-space: pre-wrap;
    word-wrap: break-word;
    letter-spacing: 8px;
    
  }
  .text-card {
    margin-top: 40px;
    background: white;
    border: 2px dashed white;
    border-radius: 17px;
    padding: 55px 50px;
    color: black;
    .card-title {
      font-weight: 700;
      font-size: 32px;
      margin-bottom: 30px;
    }
    .content-area {
      display: grid;
      gap: 30px;
      padding-left: 40px;
    }
    .text-row {
      font-weight: 400;
      font-size: 24px;
    }
    .columns-area {
      display: grid;
      grid-auto-columns: 1fr;
      grid-auto-flow: column dense; // 稠密
      gap: 20px;
    }
    .column-item {
      .img-area {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        img {
          width: 87px;
          height: 87px;
        }
      }
      .text-area {
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        .color-blur {
          color: #87D2F0;
        }
      }
    }
  }
  .ps {
    text-align: right;
    margin-top: 20px;
    font-weight: 400;
    font-size: 24px;
    color: black;
  }
}
</style>
