<template>
  <div class="container">
    <Header />
    <MainLayout />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MainLayout from "@/components/MainLayout.vue";
export default {
  name: "App",
  components: {
    Header,
    MainLayout
  }
};
</script>

<style lang="scss">
@import "@/styles/reset.scss";
</style>
