<template>
  <div id="our-service" class="our-service--wrapper">
    <div class="our-service--title-wrap">
      <div class="our-service--title">OUR SERVICE</div>
    </div>
    <div class="slider">
      <div class="slides">
        <div id="slide-1" class="slides-1">
          <div class="slide-img--area">
            <img src="../assets/icons/ourservice/service_01@2x.png" alt="" class="slide-img"/>
          </div>
          <div class="slide-txt">
            <div class="slide-txt--title">크루&슬롯</div>
            <div class="slide-txt--contents">
              반려인들의 소모임 커뮤니티 공간입니다. <br/>
              크루 활동을 통해 반려인들과 펫뮤니티 문화를 <br/>
              형성하고 슬롯을 획득하여 최저가 득템의 기회도 <br/>
              놓치지 마세요 :)
            </div>
          </div>
        </div>
        <div id="slide-2">
          <div class="slide-img--area">
            <img src="../assets/icons/ourservice/service_02@2x.png" alt="" class="slide-img"/>
          </div>
          <div class="slide-txt">
            <div class="slide-txt--title">지수 매칭리스트</div>
            <div class="slide-txt--contents">
              다섯가지 지수매칭 다이어그램을 통해 우리 아이에게
              꼭 필요한 물품을 Ai가 매칭 선별하여 보호자님께
              추천해 드리는 감성소비 인공지능을 도입했습니다 :)
              펫뮤니티앱의 기능을 마음껏 활용해보세요!
            </div>
          </div>
        </div>
        <div id="slide-3">
          <div class="slide-img--area">
            <img src="../assets/icons/ourservice/service_03@2x.png" alt="" class="slide-img"/>
          </div>
          <div class="slide-txt">
            <div class="slide-txt--title">MY PET 다중정보</div>
            <div class="slide-txt--contents">
              하나의 계정으로 다묘다견 아이들의 정보를 등록 할 수 있어요!
            </div>
          </div>
        </div>
        <div id="slide-4">
          <div class="slide-img--area">
            <img src="../assets/icons/ourservice/service_04@2x.png" alt="" class="slide-img"/>
          </div>
          <div class="slide-txt">
            <div class="slide-txt--title">SNS</div>
            <div class="slide-txt--contents">
              고선생과 댕댕이를 위한 1묘1견 투비펫 SNS 계정 오픈!! 활동을 많이 할 수록 포인트도 쌓이고 선물도 준대요!
            </div>
          </div>
        </div>
        <div id="slide-5">
          <div class="slide-img--area">
            <img src="../assets/icons/ourservice/service_05@2x.png" alt="" class="slide-img"/>
          </div>
          <div class="slide-txt">
            <div class="slide-txt--title">이벤트</div>
            <div class="slide-txt--contents">
              투비데이 / 매주무료체험단 / 할인쿠폰 등등 <br/>
              365일 내내 투비펫은 이벤트 풍년!!
            </div>
          </div>
        </div>
        <div id="slide-6">
          <div class="slide-img--area">
            <img src="../assets/icons/ourservice/service_06@2x.png" alt="" class="slide-img"/>
          </div>
          <div class="slide-txt">
            <div class="slide-txt--title">출석체크</div>
            <div class="slide-txt--contents">
              하루한번 출석시 실제 상품을 구매할 수 있는 포인트가 적립돼요!
            </div>
          </div>
        </div>
      </div>
      <div class="dot-indicator--area">
        <div class="dot-indicator--wrapper">
          <div :class="[isActiveOne ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
          <div :class="[isActiveTwo ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
          <div :class="[isActiveThree ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
          <div :class="[isActiveFour ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
          <div :class="[isActiveFive ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
          <div :class="[isActiveSix ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "OurService",
  data() {
    return {
      isActiveOne: true,
      isActiveTwo: false,
      isActiveThree: false,
      isActiveFour: false,
      isActiveFive: false,
      isActiveSix: false,
    }
  },
  mounted() {
    this.event()
    this.dotChangeOnTime()
  },
  methods: {
    dotIndicator () {
      const slide1 = document.getElementById("slide-1");
      const slide2 = document.getElementById("slide-2");
      const slide3 = document.getElementById("slide-3");
      const slide4 = document.getElementById("slide-4");
      const slide5 = document.getElementById("slide-5");
      const slide6 = document.getElementById("slide-6");

      if (window.innerWidth > 768) {
        this.isActiveOne = slide1.getBoundingClientRect().x > -400;
        this.isActiveTwo = slide2.getBoundingClientRect().x < 700 && slide2.getBoundingClientRect().x > -400;
        this.isActiveThree = slide3.getBoundingClientRect().x < 700 && slide3.getBoundingClientRect().x > -400;
        this.isActiveFour = slide4.getBoundingClientRect().x < 700 && slide4.getBoundingClientRect().x > -400;
        this.isActiveFive = slide5.getBoundingClientRect().x < 700 && slide5.getBoundingClientRect().x > -400;
        this.isActiveSix = slide6.getBoundingClientRect().x < 700 && slide6.getBoundingClientRect().x > -400;
      } else {
        this.isActiveOne = slide1.getBoundingClientRect().x > -80;
        this.isActiveTwo = slide2.getBoundingClientRect().x < 240 && slide2.getBoundingClientRect().x > -80;
        this.isActiveThree = slide3.getBoundingClientRect().x < 240 && slide3.getBoundingClientRect().x > -80;
        this.isActiveFour = slide4.getBoundingClientRect().x < 240 && slide4.getBoundingClientRect().x > -80;
        this.isActiveFive = slide5.getBoundingClientRect().x < 260 && slide5.getBoundingClientRect().x > -60;
        this.isActiveSix = slide6.getBoundingClientRect().x < 380 && slide6.getBoundingClientRect().x > -80;
      }
    },
    dotChangeOnTime() {
      setInterval(this.dotIndicator, 1000)
    },
    event() {
      const slider = document.querySelector('.slides');
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        this.dotIndicator()
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        this.dotIndicator()
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        this.dotIndicator()
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 0.7; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        this.dotIndicator()
      });
    },
  }
}
</script>
<style scoped>
.our-service--wrapper {
  background-image: url("../assets/icons/background/bg_03_purple.png");
  background-size: cover;
  padding-top: 150px;
}

.our-service--title-wrap {
  display: flex;
  justify-content: center;
  min-width: 1200px;
}

.our-service--title {
  font: normal normal normal 44px "Noto Sans Bold", sans-serif;
  color: white;
  margin-bottom: 50px;
  text-align: center;
}

.slider {
  width: 100%;
  text-align: center;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}

.slides {
  display: flex;
  overflow-x: auto;
  position: relative;
  width: 100%;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.slides::-webkit-scrollbar {
  display: none;
}

.slides-1 {
  margin-left: 184px;
}

.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 996px;
  height: 450px;
  margin-right: 102px;
  border-radius: 32px;
  background: white;
  position: relative;
  display: flex;
  text-align: start;
  font-size: 20px;
  color: #666666
}

.slide-img--area {
  width: 498px;
  height: 450px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  background: #fcfcfc;
}

.slide-img {
  width: 480px;
}

.slide-txt {
  max-width: 498px;
  padding: 50px;
}

.slide-txt--title {
  font: normal normal 800 26px "Noto Sans Regular";
  margin-top: 70px;
}

.slide-txt--contents {
  margin-top: 16px;
  max-width: 398px;
  overflow-wrap: anywhere;
  white-space: normal;
  color: #666666;
}

.dot-indicator--area {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 150px;
  min-width: 1200px;
}

.dot-indicator--wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
}

.dot-indicator--activated {
  background: #333333;
  width: 8px;
  height: 8px;
  border-radius: 100px;
}

.dot-indicator--deactivated {
  background: white;
  width: 8px;
  height: 8px;
  border-radius: 100px;
}

@media screen and (max-width: 768px) {
  .our-service--wrapper {
    padding-top: 120px;
  }

  .our-service--title-wrap {
    min-width: 300px;
  }

  .our-service--title {
    font: normal normal normal 32px "Noto Sans Bold", sans-serif;
  }

  .slides-1 {
    margin-left: 48px;
  }

  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 264px;
    height: 520px;
    margin-right: 24px;
    border-radius: 24px;
    background: white;
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: 16px;
    color: #666666
  }

  .slide-img--area {
    width: 264px;
    height: 250px;
    display: flex;
    justify-content: center;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background: #fcfcfc;
  }

  .slide-img {
    width: 264px;
  }

  .slide-txt {
    max-width: 264px;
    padding: 24px;
  }

  .slide-txt--title {
    font: normal normal 800 20px "Noto Sans Regular";
    margin-top: 0;
  }

  .slide-txt--contents {
    margin-top: 16px;
    max-width: 264px;
    overflow-wrap: anywhere;
    white-space: normal;
  }

  .dot-indicator--area {
    min-width: 300px;
  }
}
</style>
