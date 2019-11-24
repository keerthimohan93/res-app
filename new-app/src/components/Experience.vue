<template>
  <div class="listing-container experience-container">
    <WorkCard :data="experienceData"/>
  </div>
</template>

<script>
import WorkCard from "@/components/WorkCard";
import { mapGetters } from "vuex";
export default {
  name: "Experience",
  components: {
    WorkCard
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["experienceData"])
  }
};
</script>

<style lang="scss">
.experience-container {
  animation: container-animation 0.6s ease;
  .card-container {
    width: 70%;
  }
}
</style>