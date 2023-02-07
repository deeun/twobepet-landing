<template>
  <div class="bottom-sec-wrapper">
    <!-- 펫뮤니티 오픈 -->
    <div>
      <div class="reveal">
        <div class="fx-justify-content-center">
          <img src="../assets/icons/icon/heart_66.svg" class="bottom-sec-heart" alt=""/>
          <div class="bottom-sec--txt-1">Petmunity Open!</div>
          <img src="../assets/icons/icon/heart_66.svg" class="bottom-sec-heart" alt=""/>
        </div>
        <div class="bottom-sec--txt-2">
          집사님! 펫뮤니티와 건강하고 즐거운 시간 함께 보내실 준비되셨나요?! <br/>
          다양하고 새로운 양질의 서비스를 늘 꾸준히 제공해 드릴 것을 약속합니다 :)
        </div>
      </div>
      <div class="fx-justify-content-center reveal">
        <img src="../assets/icons/character/bg_05.png" class="bottom-sec-image" alt=""/>
      </div>
    </div>
    <!-- 사업자 정보 -->
    <div class="bottom-sec-info--wrapper">
      <div class="bottom-sec-info--policy fx-justify-content-center mg-bottom-16">
        <span>이용약관</span>&nbsp; | &nbsp;<span>개인정보처리방침</span>
      </div>
      <div class="fx-justify-content-center mg-bottom-4">
        <span class="bottom-sec-info--title">회사명</span>
        <span class="bottom-sec-info--content mg-right-8">주식회사 투비펫</span>
        <span class="bottom-sec-info--title">대표자</span>
        <span class="bottom-sec-info--content">김석원</span>
      </div>
      <div class="fx-justify-content-center mg-bottom-4">
        <span class="bottom-sec-info--title">사업자등록번호</span>
        <span class="bottom-sec-info--content">382-87-01940</span>
      </div>
      <div class="fx-justify-content-center mg-bottom-4">
        <span class="bottom-sec-info--title">통신판매업신고</span>
        <span class="bottom-sec-info--content">제 2021-서울강서-2307호</span>
      </div>
      <div class="fx-justify-content-center mg-bottom-4">
        <span class="bottom-sec-info--title">주소</span>
        <span class="bottom-sec-info--content">서울 강서구 양천로 401 강서한강자이타워 B동 1301호</span>
      </div>
      <div class="fx-justify-content-center mg-top-16">
        <span class="bottom-sec-info--content">ⓒ 2023. 2bpet all rights reserved.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomSection"
}
</script>

<style scoped>
.bottom-sec-wrapper {
  min-width: 1200px;
}

.bottom-sec--txt-1 {
  color: #7A95CF;
  font: normal normal normal 44px 'Noto Sans Bold';
  margin: 0 48px;
}

.bottom-sec--txt-2 {
  color: #666666;
  font: normal normal normal 20px/28px 'Noto Sans Regular';
  text-align: center;
  margin-top: 16px;
  margin-bottom: 108px;
}

.bottom-sec-info--wrapper {
  background: #F8F9FA;
  height: 164px;
  padding: 50px;
  min-width: 1200px;
}

.bottom-sec-info--policy {
  color: #DDDDDD;
  font: normal normal normal 12px 'Noto Sans Regular';
}

.bottom-sec-info--policy > * {
  color: #999999;
  font: normal normal normal 14px 'Noto Sans Regular';
}

.bottom-sec-info--title {
  color: #999999;
  font: normal normal normal 14px 'Noto Sans Regular';
  margin-right: 4px;
}

.bottom-sec-info--content {
  color: #666666;
  font: normal normal normal 14px 'Noto Sans Regular';
}

@media screen and (max-width: 768px) {
  .bottom-sec-wrapper {
    min-width: 300px;
  }

  .bottom-sec--txt-1 {
    font: normal normal normal 26px 'Noto Sans Bold';
    margin: 0 24px;
  }

  .bottom-sec-heart {
    width: 24px;
  }

  .bottom-sec--txt-2 {
    padding: 0 24px;
    font: normal normal normal 16px/20px 'Noto Sans Regular';
    margin-bottom: 56px;
  }

  .bottom-sec-image {
    max-width: 360px;
  }

  .bottom-sec-info--wrapper {
    height: 284px;
    padding: 10px;
    min-width: 300px;
  }

  .bottom-sec-info--policy {
    margin-top: 40px;
  }
}
</style>
