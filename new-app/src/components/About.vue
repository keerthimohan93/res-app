<template>
  <div class="about-container">
    <Card :data="aboutData"/>
    <div class="item-container">
      <ProfilePhoto/>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import ProfilePhoto from "@/components/ProfilePhoto.vue";

import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    Card,
    ProfilePhoto
  },
  computed: {
    ...mapGetters(["aboutData"])
  }
};
</script>

<style lang="scss">
.about-container {
  animation: container-animation 0.6s ease;
  display: flex;
  padding: 140px 0 0 30%;
  .listing-container {
    padding: 0;
    width: 50%;
  }
  .item-container {
    width: 40%;
  }
}
</style>
