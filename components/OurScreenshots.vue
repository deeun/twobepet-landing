<template>
  <div id="our-screenshots" class="our-screenshots--wrapper">
    <div class="our-screenshots--title-wrap">
      <div class="our-screenshots--title">OUR SCREENSHOTS</div>
    </div>
    <div class="ss-slider">
      <div class="ss-slides">
        <div id="ss-slide-1" class="ss-slides-group">
          <div>
            <img class="ss-slide-img" src="../assets/icons/ourscreenshot/screen_shot01.png" alt=""/>
          </div>
          <div>
            <img class="ss-slide-img" src="../assets/icons/ourscreenshot/screen_shot02.png" alt=""/>
          </div>
          <div>
            <img class="ss-slide-img" src="../assets/icons/ourscreenshot/screen_shot03.png" alt=""/>
          </div>
        </div>
        <div id="ss-slide-2" class="ss-slides-group">
          <div>
            <img class="ss-slide-img" src="../assets/icons/ourscreenshot/screen_shot04.png" alt=""/>
          </div>
          <div>
            <img class="ss-slide-img" src="../assets/icons/ourscreenshot/screen_shot05.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div class="dot-indicator--area">
      <div class="dot-indicator--wrapper">
        <div :class="[isActiveOne ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
        <div :class="[isActiveTwo ? 'dot-indicator--activated' : 'dot-indicator--deactivated']"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurScreenshots",
  data() {
    return {
      isActiveOne: true,
      isActiveTwo: false,
      isActiveThree: false
    }
  },
  mounted() {
    this.event()
    this.dotChangeOnTime()
  },
  methods: {
    dotIndicator () {
      const slide1 = document.getElementById("ss-slide-1");
      const slide2 = document.getElementById("ss-slide-2");

      this.isActiveOne = slide1.getBoundingClientRect().x > -400;
      this.isActiveTwo = slide2.getBoundingClientRect().x < 700 && slide2.getBoundingClientRect().x > -400;
    },
    dotChangeOnTime() {
      setInterval(this.dotIndicator, 1000)
    },
    event() {
      const slider = document.querySelector('.ss-slides');
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
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
  },
}
</script>

<style scoped>
.our-screenshots--wrapper {
  background: #F8F9FA;
  padding-top: 150px;
}

.our-screenshots--title-wrap {
  display: flex;
  justify-content: center;
  min-width: 1200px;
}

.our-screenshots--title {
  font: normal normal normal 44px "Noto Sans Bold", sans-serif;
  color: #7356BD;
  margin-bottom: 80px;
  text-align: center;
}

.ss-slider {
  width: 100%;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  -webkit-overflow-scrolling: touch;
}

.ss-slides {
  display: flex;
  overflow-x: auto;
  position: relative;
  width: 1180px;
  height: 646px;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.ss-slides::-webkit-scrollbar {
  display: none;
}

.ss-slides-group {
  padding: 10px 0 0 10px;
  display: flex;
  justify-content: space-between;
}

.ss-slides-group div {
  box-shadow: 0 2px 15px 2px rgba(0, 0, 0, 0.08);
  width: 352px;
  height: 626px;
  border-radius: 24px;
  margin-right: 56px;
}

.ss-slide-img {
  width: 352px;
  border-radius: 24px;
  -moz-border-radius: 24px;
  -webkit-border-radius: 24px;
  vertical-align: top;
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
  width: 24px;
  margin-bottom: 150px;
}

.dot-indicator--activated {
  background: #7356BD;
  width: 8px;
  height: 8px;
  border-radius: 100px;
}

.dot-indicator--deactivated {
  background: #DDDDDD;
  width: 8px;
  height: 8px;
  border-radius: 100px;
}

@media screen and (max-width: 768px) {
  .our-screenshots--wrapper {
    padding-top: 120px;
  }

  .our-screenshots--title-wrap {
    min-width: 300px;
  }

  .our-screenshots--title {
    font: normal normal normal 32px "Noto Sans Bold", sans-serif;
  }

  .ss-slides {
    margin-left: 24px;
  }

  .ss-slides {
    height: 488px;
  }

  .ss-slides-group div {
    width: 264px;
    height: 468px;
    margin-right: 24px;
  }

  .ss-slide-img {
    width: 264px;
  }

  .dot-indicator--area {
    min-width: 300px;
  }

  .dot-indicator--wrapper {
    margin-bottom: 120px;
  }
}
</style>용
