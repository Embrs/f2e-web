<script setup>
// Section5 ð
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
  .title-text {{"ååä¿®çå·²ç¶ç¡æ³æ»¿è¶³äºåï¼\néææ¯è³½ç­èä½ ï¼"}}

  .text-card
    .card-title {{"è©å¯©æ©å¶"}}
    .content-area
      .text-row {{"â åé¸ï¼å°ç±å­è§å­¸é¢åç«¯ãUI è©å¯©é²è¡ç¬¬ä¸æ³¢ç¯©é¸ï¼ä¸¦æ¼ 12/5ï¼äºï¼å¬å¸åé¸ä½³ä½åå®"}}
      .text-row {{"â æ±ºé¸ï¼ç±ä¸å¤§ä¼æ¥­éå°è©²ä¼æ¥­ä¸»é¡é²è¡å¥åçæå¾ç¯©é¸ï¼ä¸¦æ¼ 12/23ï¼äºï¼å¬å¸ä¼æ¥­å¾çåå®"}}

  .text-card
    .card-title {{"çé "}}
    .columns-area
      .column-item(data-tilt-scale="1.1")
        .img-area
          img(src="@/assets/section5/badge.png")
        .text-area
          p {{"åé¸ä½³ä½ å±å­åä½"}}
          p.color-blur {{"æ¸ä½çç"}}
          p {{"æ¯é±ä¸»é¡åäººçµåä½ãåé«çµåçµ"}}
      
      .column-item(data-tilt-scale="1.1")
        .img-area
          img(src="@/assets/section5/badge.png")
        .text-area
          p {{"åäººä¼æ¥­ç å±å­ä½"}}
          p.color-blur {{"NTD 3,000/ä½"}}
          p {{"æ¯é±ä¸»é¡å 2 åï¼è¨­è¨ 1 ä½ãåç«¯ 1 ä½"}}
      
      .column-item(data-tilt-scale="1.1")
        .img-area
          img(src="@/assets/section5/badge.png")
        .text-area
          p {{"åé«ä¼æ¥­ç å±ä¸çµ"}}
          p.color-blur {{"NTD 10,000/çµ"}}
          p {{"æ¯é±ä¸»é¡å 1 çµ"}}
  .ps {{"ä»¥ä¸çæä¾å®è³½æ¸ä½çç"}}
</template>

<style lang="scss" scoped>
// æç
#Section5 {
  background: linear-gradient(291.75deg, #91D7EE 6.23%, rgba(145, 215, 238, 0) 100.91%);
  padding: 34px 88px;
}

// åä»¶
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
      grid-auto-flow: column dense; // ç¨ å¯
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
