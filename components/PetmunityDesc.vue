<template>
  <div id="petmunity-desc" class="petmunity-desc--wrapper">
    <!-- 펫뮤니티 시작 -->
    <div class="petmunity-desc--sec1 reveal">
      <div class="desc-sec1--txt1"><span class="purple bold">PET</span> + <span class="blue bold">COMMUNITY</span></div>
      <div class="desc-sec1--txt2">PETMUNITY의 시작</div>
      <div class="desc-sec1--txt3 black-1">
        펫뮤니티를 통해 우리 아이들이 정말 원하는 게 무엇인지 <br class="mobile-remove"/>
        댕린이와 고선생의 취향을 반영한 올바른 감성소비를 할 수 있도록! <br/>
        우리는 단순한 쇼핑앱을 넘어 펫뮤니케이션을 통해 SNS, 크루,게임, 지수매칭서비스 등 <br class="mobile-remove"/>
        다양한 서비스를 제공하고 있습니다
      </div>
    </div>
    <!-- 회색줄 -->
    <div class="fx-justify-content-center">
      <hr class="petmunity-desc--hr"/>
    </div>
    <!-- 아이콘3개 설명글3개 -->
    <div class="petmunity-desc--sec2">
      <div class="petmunity-desc--sec2-mobile-align">
        <div class="desc-sec2--1 reveal">
          <div class="desc-sec2--img">
            <img src="../assets/icons/character/NETWORK.png" alt=""/>
          </div>
          <div class="desc-sec2--textarea">
            <img src="../assets/icons/icon/heart_24.svg" alt=""/>
            <span class="fs-26 purple bold mg-left-16">CREW</span>
            <div class="desc-sec2--txt mg-top-8">
              반려동물 공통 관심사를 가진 유저들의 모임 공간 펫뮤니티 "크루" <br/>
              "크루"에서 우리아이 사진도 자랑하고 펫뮤니티 모임을 즐기다보면 <br/>
              스르륵~ 최저가 상품 슬롯이 오픈돼요! 공구가보다 저렴하게 Get!! 해보세요.
            </div>
          </div>
        </div>
        <div class="desc-sec2 reveal">
          <div class="desc-sec2--img">
            <img src="../assets/icons/character/SHOPPING.png" alt=""/>
          </div>
          <div class="desc-sec2--textarea">
            <img src="../assets/icons/icon/heart_24.svg" alt=""/>
            <span class="fs-26 blue bold mg-left-16">SHOPPING</span>
            <div class="desc-sec2--txt mg-top-8">
              최대 규모 반려동물 용품 모두 총집합!! <br/>
              이제 쇼핑 유목민 생활은 그만~ 펫뮤니티 하나면 이제 충분해요 :)
            </div>
          </div>
        </div>
        <div class="desc-sec2 mg-top-50 mg-bottom-150 reveal">
          <div class="desc-sec2--img">
            <img src="../assets/icons/character/PETLIFE.png" alt=""/>
          </div>
          <div class="desc-sec2--textarea">
            <img src="../assets/icons/icon/heart_24.svg" alt=""/>
            <span class="fs-26 pink bold mg-left-16">Ai MATCHING</span>
            <div class="desc-sec2--txt mg-top-8">
              다섯 가지 지수 매칭 다이어그램을 통해 우리 아이에게 꼭 필요한 물품을 Ai가 선별하여 <br class="mobile-remove"/>
              집사님께 추천해 드리는 감성 소비 인공지능을 도입했어요. <br/>
              펫뮤니티앱의 기능을 마음껏 활용해 보세요. <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetmunityDesc"
}
</script>

<style scoped>
.petmunity-desc--wrapper {
  min-width: 1200px;
}

.petmunity-desc--sec1 {
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.desc-sec1--txt1 {
  font: normal normal normal 26px "Noto Sans Bold", sans-serif;
  color: #999999;
  text-align: center;
}

.desc-sec1--txt2 {
  font: normal normal normal 44px "Noto Sans Bold", sans-serif;
  margin-top: 10px;
  text-align: center;
}

.desc-sec1--txt3 {
  font: normal normal normal 20px "Noto Sans Regular", sans-serif;
  margin-top: 40px;
  text-align: center;
  width: 800px;
  display: flex;
  justify-content: center;
}

.petmunity-desc--hr {
  margin-top: 150px;
  width: 792px;
  height: 1px;
  border: none;
  background-color: #dddddd;
}

.desc-sec2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.desc-sec2--img {
  width: 180px;
}

.desc-sec2--1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
}

.desc-sec2--txt {
  width: 588px;
  font: normal normal normal 16px "Noto Sans Regular", sans-serif;
  color: #666666;
}

@media screen and (max-width: 768px) {
  .petmunity-desc--wrapper {
    min-width: 310px;
    max-width: 768px;
  }

  .petmunity-desc--sec1 {
    margin-top: 120px;
  }

  .desc-sec1--txt1 {
    font: normal normal normal 20px "Noto Sans Bold", sans-serif;
    color: #999999;
    text-align: center;
  }

  .desc-sec1--txt2 {
    font: normal normal normal 32px "Noto Sans Bold", sans-serif;
    margin-top: 10px;
    text-align: center;
  }

  .desc-sec1--txt3 {
    font: normal normal normal 16px "Noto Sans Regular", sans-serif;
    margin-top: 16px;
    text-align: center;
    padding: 24px;
    max-width: 85%;
    overflow-wrap: anywhere;
    white-space: normal;
  }

  .mobile-remove {
    display: none !important;
  }

  .petmunity-desc--hr {
    margin-top: 80px;
    width: 312px;
    height: 1px;
    border: none;
    background-color: #dddddd;
  }

  .petmunity-desc--sec2 {
    display: flex;
    justify-content: center;
  }

  .petmunity-desc--sec2-mobile-align {
    width: 85%;
  }

  .desc-sec2 {
    display: inline-block;
  }

  .desc-sec2--1 {
    display: inline-block;
  }

  .desc-sec2--txt {
    width: 100%;
  }
}
</style>
