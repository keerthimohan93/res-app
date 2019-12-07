<template>
  <div class="listing-container home-container">
    <p>{{ homeSummary.briefText }}</p>
    <ul class="pointers">
      <li
        class="pointer-item"
        v-for="(item, index) in homeSummary.pointers"
        v-bind:key="index"
      >
        <span class="pointer-index">{{ index + 1 }}.</span>
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
.pointer-item {
  padding: 10px;
  font-weight: bold;
  color: #79a8a9;
  &:first-child {
    margin-top: 20px;
  }
}
.pointer-index {
  padding-right: 5px;
  font-weight: bold;
  color: #79a8a9;
}
.home-container {
  p {
    line-height: 25px;
    font-weight: bold;
  }
}
</style>
