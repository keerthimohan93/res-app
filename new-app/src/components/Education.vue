<template>
  <div class="listing-container education-container">
    <Card :data="educationData"/>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapGetters } from "vuex";
export default {
  name: "Education",
  components: {
    Card
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["educationData"])
  }
};
</script>

<style lang="scss">
.education-container {
  animation: container-animation 0.8s ease;
  .card-container {
    width: 80%;
  }
}
@media (min-width: 360px) and (max-width: 740px) {
  .education-container {
    animation: none;
    .card-container {
      width: 90%;
    }
  }
}
</style>