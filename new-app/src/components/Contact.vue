<template>
  <div class="contact-container">
    <Card :data="contactData"/>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  components: {
    Card
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters(["contactData"])
  }
};
</script>

<style lang="scss">
.contact-container {
  animation: container-animation 0.6s ease;
  .card-container {
    width: 70%;
  }
}
</style>