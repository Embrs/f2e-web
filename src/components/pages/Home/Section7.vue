<script setup>
// Section7 📄
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
#Section7
  .title {{"贊助單位"}}
  .img-group-row
    img.logo-img(src="@/assets/section7/logo1.jpg")
    img.logo-img(src="@/assets/section7/logo2.jpg")
    img.logo-img(src="@/assets/section7/logo3.jpg")
  .title {{"共同推廣"}}
  .img-group-row
    img.logo-img(src="@/assets/section7/logo1.jpg")
    img.logo-img(src="@/assets/section7/logo2.jpg")
    img.logo-img(src="@/assets/section7/logo3.jpg")
  .copy-right {{"Copyright © 2022 HexSchool.All rights reserved."}}
</template>

<style lang="scss" scoped>
// 排版
#Section7 {
  background: linear-gradient(291.75deg, #91D7EE 6.23%, rgba(145, 215, 238, 0) 100.91%);
  color: black;
}

// 元件
#Section7
{
  .title {
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    padding: 25px;
  }
  .logo-img {
    width: 120px;
    height: 120px;
  }
  .img-group-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 140px ;
  }
  .copy-right {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    padding: 20px;
  }
}
</style>
