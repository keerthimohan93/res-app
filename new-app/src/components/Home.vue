<template>
  <div class="listing-container home-container">
    <p>{{homeSummary.briefText}}</p>
    <div v-if="homeSummary.pointers.length > 0">
      <ul v-for="(item, index) in homeSummary.pointers" v-bind:key="index">
        <li class="pointer-item">
          <span class="pointer-index">{{index+1}}.</span>
          {{item}}
        </li>
      </ul>
    </div>
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
}
.pointer-index {
  padding-right: 5px;
}
</style>
