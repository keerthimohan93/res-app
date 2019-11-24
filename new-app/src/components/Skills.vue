<template>
  <div class="skills-container">
    <Card :data="skillsData"/>
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
    width: 80%;
  }
}
</style>
