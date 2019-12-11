<template>
  <div class="main-layout-container">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "MainLayout",
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
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
