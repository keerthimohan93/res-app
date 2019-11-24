<template>
  <div class="others-container">
    <Card :data="accomplishMentsData"/>
    <Card :data="referencesData"/>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapGetters } from "vuex";
export default {
  name: "Others",
  components: {
    Card
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["accomplishMentsData", "referencesData"])
  }
};
</script>

<style lang="scss">
.others-container {
  animation: container-animation 0.8s ease;
}
</style>