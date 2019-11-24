<template>
  <div>
    <div class="header-container">
      <h2>Keerthi Mohan</h2>
    </div>
    <NavHeader/>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
export default {
  name: "Header",
  components: {
    NavHeader
  }
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 75px;
  background: #5f5968;
  h2 {
    color: white;
    font-size: 22px;
    margin: 0 auto;
  }
}
.profile-pic-section {
  padding: 0 30px 10px 0;
}
</style>
