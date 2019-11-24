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
</style>
