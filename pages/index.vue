<template>
  <div class="wrap">
    <NavBar/>
    <MainSection/>
    <PetmunityDesc/>
    <OurService/>
    <OurScreenshots/>
    <BottomSection/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
</script>
<style scoped>
.wrap {
  overflow-x: hidden;
}
</style>
