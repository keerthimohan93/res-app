<template>
  <div class="education-container">
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
}
</style>