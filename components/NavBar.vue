<template>
  <div class="navbar--fix">
    <div class="navbar--size">
      <div class="navbar--icon">
        <div><img src="../assets/icons/logo_petmunity_p.png" alt=""/></div>
      </div>
      <div class="navbar--contents">
        <a href="#main-section">앱 다운로드</a>
        <a href="#petmunity-desc">앱소개</a>
        <a href="#our-service">서비스</a>
        <a href="#our-screenshots">스크린샷</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar--fix {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: var(--screen-width);
  min-width: var(--screen-min-width);
  z-index: 9999;
  display: flex;
  justify-content: center;
}

.navbar--size {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 80px;
}

.navbar--icon {
  width: 150px;
}

.navbar--icon img {
  width: 100%;
}

.navbar--contents {
  font: normal normal 500 18px/26px "Noto Sans Bold";
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar--contents a {
  cursor: pointer;
  font-family: "Noto Sans Bold", sans-serif;
  padding: 32px;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .navbar--fix {
    min-width: 0;
  }

  .navbar--size {
    max-width: 768px;
    display: flex;
    height: 54px;
    flex-direction: column;
  }

  .navbar--contents a {
    width: 0;
    height: 0;
    visibility: hidden;
  }
}
</style>
