<template>
  <div class="listing-container skills-container">
    <Card :data="skillsData" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapGetters } from "vuex";
export default {
  name: "Skills",
  components: {
    Card
  },
  computed: {
    ...mapGetters(["skillsData"])
  }
};
</script>

<style lang="scss">
.skills-container {
  animation: container-animation 0.6s ease;
  .card-container {
    width: 85%;
  }
}
@media (min-width: 360px) and (max-width: 740px) {
  .skills-container {
    animation: none;
    .card-container {
      width: 90%;
    }
  }
}
</style>
