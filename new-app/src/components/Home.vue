<template>
  <div class="listing-container home-container">
    <p>{{ homeSummary.briefText }}</p>
    <p>{{ homeSummary.introText }}</p>
    <p class="intro-summary">{{ homeSummary.introSummary }}</p>
    <ul class="pointers">
      <li
        class="pointer-item"
        v-for="(item, index) in homeSummary.pointers"
        v-bind:key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["homeSummary"])
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.pointer-item {
  padding: 10px;
  font-weight: bold;
  color: $title;
  &:first-child {
    margin-top: 20px;
  }
}
.pointer-index {
  padding-right: 5px;
  font-weight: bold;
  color: $title;
}
.home-container {
  p {
    line-height: 70px;
    font-weight: bold;
    font-size: 60px;
    color: $header;
  }
  .intro-summary {
    font-size: 20px;
    line-height: 40px;
  }
}
@media (min-width: 340px) and (max-width: 740px) {
  .home-container {
    p {
      font-size: 30px;
      line-height: 40px;
    }
    .intro-summary {
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
