<template>
  <div class="listing-container page-not-found">
    <div class="page-not-found-content">
      <p>The page your looking for is not found....</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.page-not-found-content {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $nav-header;
  font-size: 24px;
  width: 100%;
}
</style>
