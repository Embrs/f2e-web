<script setup>
// Section6 📄
// ====== Utils ===========================================================
// ====== Data ============================================================
// ====== Mixin ===========================================================
// ====== Computed ========================================================
// ====== Methods =========================================================
// ====== Created =========================================================
// ====== Life Cycle ======================================================
// ====== Return ==========================================================
const listData = [
  {
    q: "Ｑ.如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？",
    a: "Ａ：可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。"
  },
  {
    q: "Ｑ.大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品        ",
    a: "Ａ：這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。",
  },
  {
    q: "Ｑ.我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？",
    a: "Ａ：主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。",
  },
  {
    q: "Ｑ.我已經寫到一半了，但時間快來不及，可以先投稿嗎？",
    a: "Ａ：可以，有投稿表示你還會持續努力在這次活動上。",
  }
];
</script>

<template lang="pug">
#Section6
  .tab-area
    p.color-blur {{"常見問答"}}
    p {{"UI 設計師常見問題"}}
    p {{"前端工程師常見問題"}}
    p {{"團體組常見問題"}}
  .title-area {{"常見問題"}}
  .qa-card(v-for="item of listData" :key="item.q")
    .q-item {{item.q}}
    .a-item {{item.a}}
</template>

<style lang="scss" scoped>
// 排版
#Section6 {
  padding: 146px 51px 0;
  color: black;
  .tab-area {
    display: flex;
    justify-content: center;
    gap: 40px ;
    padding: 10px;
    font-weight: 400;
    font-size: 24px;
  }
  .title-area { 
    font-weight: 700;
    font-size: 32px;
    padding: 30px 0 30px 100px  ;
  }

}

// 元件
#Section6
{
  .color-blur {
    color: #87D2F0;
  }
  .qa-card {
    .q-item {
      font-weight: 700;
      font-size: 32px;
      border: 1px solid black;
      border-radius: 16px;
      padding: 15px 30px;
    }
    .a-item {
      font-weight: 400;
      font-size: 24px;
      padding: 20px 0 30px 80px;
    }
  }
}
</style>
