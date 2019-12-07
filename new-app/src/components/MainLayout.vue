<template>
  <div class="main-layout-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style lang='scss'>
@import "@/styles/common.scss";
.listing-container {
  padding: 140px;
  padding-left: 30%;
}
@media (min-width: 360px) and (max-width: 740px) {
  .listing-container {
    padding: 100px 20px 10px 20px;
  }
}
</style>
