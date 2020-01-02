<template>
  <div class="main-layout-container">
    <Header />
    <router-view></router-view>
    <ul class="bg-bubbles-main-layout">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "MainLayout",
  components: {
    Header
  },
  mounted() {
    document.querySelector(".container").classList.add("remove-body-default");
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.remove-body-default {
  position: static;
  height: 100%;
}
.listing-container {
  padding: 140px;
  padding-left: 30%;
  background: $background;
  overflow-y: auto;
  border: none;
}
.bg-bubbles-main-layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
  li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background: $background-green;
    bottom: -160px;
    opacity: 0.15;

    -webkit-animation: square 25s infinite;
    animation: square 25s infinite;

    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;

    &:nth-child(1) {
      left: 10%;
    }

    &:nth-child(2) {
      left: 20%;

      width: 80px;
      height: 80px;

      animation-delay: 2s;
      animation-duration: 17s;
    }

    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }

    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;

      animation-duration: 22s;

      background: $background-green;
      opacity: 0.15;
    }

    &:nth-child(5) {
      left: 70%;
    }

    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;

      animation-delay: 3s;
      background: $background-green;
      opacity: 0.15;
    }

    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;

      animation-delay: 7s;
    }

    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;

      animation-delay: 15s;
      animation-duration: 40s;
    }

    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;

      animation-delay: 2s;
      animation-duration: 40s;
      background: $background-green;
      opacity: 0.15;
    }

    &:nth-child(10) {
      left: 90%;
      width: 160px;
      height: 160px;

      animation-delay: 11s;
    }
  }
}

@media (min-width: 360px) and (max-width: 740px) {
  .listing-container {
    padding: 100px 20px 10px 20px;
  }
}
</style>
