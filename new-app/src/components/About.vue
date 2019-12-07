<template>
  <div class="listing-container about-container">
    <div class="about-card">
      <Card :data="aboutData"/>
    </div>
    <div class="about-profile">
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
  .about-card,
  .about-profile {
    width: 50%;
    .card-container {
      width: 70%;
    }
    .profile-container {
      width: 80%;
    }
  }
}
@media (min-width: 360px) and (max-width: 740px) {
  .about-container {
    animation: none;
    .card-container {
      width: 90%;
    }
  }
}
</style>
