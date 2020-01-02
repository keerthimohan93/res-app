<template>
  <div class="listing-container experience-container">
    <div v-for="(item, index) in experienceData" v-bind:key="index">
      <WorkCard
        :name="item.name"
        :year="item.year"
        :role="item.role"
        :clients="item.clients"
      />
    </div>
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
  .card-container {
    width: 70%;
  }
}
@media (min-width: 360px) and (max-width: 740px) {
  .experience-container {
    animation: none;
    .card-container {
      width: 90%;
    }
  }
}
</style>
