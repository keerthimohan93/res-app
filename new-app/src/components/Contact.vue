<template>
  <div class="listing-container contact-container">
    <Card :data="contactData" />
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
  .card-container {
    width: 70%;
  }
}
@media (min-width: 360px) and (max-width: 740px) {
  .contact-container {
    animation: none;
    .card-container {
      width: 90%;
    }
  }
}
</style>
