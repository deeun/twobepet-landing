<template>
  <div id="main-section" class="main-section--wrapper">
    <div class="fx-justify-content-center main-section--background">
      <div class="main-section--contents">
        <div class="main-section--textarea">
          <div class="main-section--textarea--banner">
            <hr class="hr"/>
            <div>
              <span class="light-yellow">PET</span>+<span class="light-yellow">COMMUNITY</span>가 만나다!
            </div>
            <hr class="hr"/>
          </div>
          <div>
            <div>
              <div class="gather-discount">모일수록 할인 받는</div>
              <div class="petmunity">펫뮤니티</div>
            </div>
            <div class="desc-text">
              댕린이와 고선생을 위한 커뮤니티 쇼핑앱 <br/>
              올바른 감성 소비를 위한 집사의 선택!
            </div>
            <div class="btn-download--wrapper">
              <button
                class="btn-download--1 center"
                @click="storeAOS">
                <img
                  class="btn-download--img"
                  src="../assets/icons/icon/ico_google_play.png" width="130px" alt=""/></button>
              <button
                class="btn-download--2"
                @click="storeIOS">
                <img
                  class="btn-download--img"
                  src="../assets/icons/icon/ico_app_store.svg" alt=""/></button>
            </div>
          </div>
        </div>
        <div class="main-section--image-area">
          <div class="main-section--image-mobile-align">
            <div>
              <img class="main-section--image-file" src="../assets/icons/character/petmunity_animation_cat.gif" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="white-triangle">
      <img src="../assets/icons/background/bg_01_triangle_white.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSection",
  methods: {
    storeAOS() {
      window.open('https://play.google.com/store/apps/details?id=com.twobpet.android')
    },
    storeIOS() {
      window.open('https://apps.apple.com/us/app/투비펫-펫-커뮤니티가-만난-올바른-감성-펫뮤니티/id1615897218')
    }
  }
}
</script>

<style scoped>
.main-section--wrapper {
  position: relative;
  top: 0;
  left: 0;
  margin-top: 80px;
}

.main-section--contents {
  width: 1200px;
  height: 800px;
  padding-left: 78px;
  display: flex;
  justify-content: space-between;
}

.main-section--textarea {
  min-width: 448px;
}

.main-section--image-area {
  margin-top: 40px;
  position: absolute;
  margin-left: 564px;
}

.main-section--image-file {
  width: 609px;
}

.main-section--textarea--banner {
  padding-top: 135px;
}

.main-section--textarea--banner > * {
  color: white;
  font-size: 28px;
  padding-bottom: 2px;
}

.hr {
  height: 2px;
  border: none;
  width: 350px;
  background-color: white;
}

.main-section--background {
  position: relative;
  top: 0;
  left: 0;
  background-image: url("assets/icons/background/bg_01_purple@2x.png");
  background-size: cover;
}

.white-triangle {
  position: absolute;
  top: 583px;
}

.btn-download--wrapper {
  margin-top: 48px;
}

.btn-download--1 {
  background: white;
  border-radius: 30px;
  border: none;
  width: 216px;
  height: 60px;
  position: absolute;
}

.btn-download--2 {
  background: white;
  border-radius: 30px;
  border: none;
  width: 216px;
  height: 60px;
  position: absolute;
  margin-left: 232px;
}

.gather-discount {
  margin-top: 24px;
  font: normal normal normal 50px "Cafe24 Ssurround";
  color: #FFD247;
}

.petmunity {
  margin-top: 16px;
  font: normal normal normal 94px "Cafe24 Ssurround";
  color: white;
  vertical-align: sub;
}

.desc-text {
  margin-top: 16px;
  color: white;
  font: normal normal normal 24px/35px "Noto Sans Light";
}

@media screen and (max-width: 768px) {
  .main-section--wrapper {
    margin-top: 54px;
  }

  .main-section--contents {
    max-width: 768px;
    min-width: 310px;
    height: 786px;
    padding-left: 0;
    display: inline-block;
  }

  .main-section--textarea {
    max-width: 310px;
    padding-left: 25px;
  }

  .main-section--image-area {
    margin-top: 60px;
    position: absolute;
    max-width: 768px;
    min-width: 310px;
    width: 100%;
    margin-left: 0;
  }

  .main-section--image-mobile-align {
    display: flex;
    justify-content: center;
  }

  .main-section--image-file {
    width: 335px;
  }

  .main-section--textarea--banner {
    padding-top: 56px;
  }

  .main-section--textarea--banner > * {
    color: white;
    font-size: 20px;
    padding-bottom: 2px;
  }

  .hr {
    height: 1px;
    border: none;
    width: 250px;
    background-color: white;
  }

  .main-section--background {
    position: relative;
    top: 0;
    left: 0;
    background-image: url("assets/icons/background/bg_01_purple@2x.png");
    background-size: auto;
  }

  .white-triangle {
    position: absolute;
    top: 569px;
  }

  .btn-download--wrapper {
    margin-top: 24px;
  }

  .btn-download--1 {
    border-radius: 30px;
    border: none;
    width: 140px;
    height: 48px;
    position: absolute;
  }

  .btn-download--2 {
    border-radius: 30px;
    border: none;
    width: 140px;
    height: 48px;
    position: absolute;
    margin-left: 156px;
  }

  .btn-download--img {
    width: 92px;
  }

  .gather-discount {
    margin-top: 24px;
    font: normal normal normal 40px "Cafe24 Ssurround";
    color: #FFD247;
  }

  .petmunity {
    margin-top: 8px;
    font: normal normal normal 60px "Cafe24 Ssurround";
    color: white;
    vertical-align: sub;
  }

  .desc-text {
    margin-top: 16px;
    color: white;
    font: normal normal normal 18px/26px "Noto Sans Light";
  }
}
</style>
