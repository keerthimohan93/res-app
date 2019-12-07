<template>
  <div>
    <div v-if="data.length > 0" class="card-container">
      <div v-for="(item, index) in data" v-bind:key="index">
        <div class="card-item" v-if="item.type !== 'link'">
          <span class="card-item-title">{{ item.key }}:</span>
          <span class="card-item-val">{{ item.value }}</span>
        </div>
        <div class="card-item" v-if="item.type === 'link'">
          <span class="card-item-title">{{ item.key }}:</span>
          <span class="card-item-val">
            <a :href="item.value" rel="no-opener no-referrer" target="_blank">
              {{
              item.value
              }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    data: Array
  }
};
</script>

<style lang="scss">
.card-container {
  width: 40%;
  height: auto;
  border: 1px solid #addef1;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.14);
  .card-item {
    font-size: 16px;
    padding: 20px 0;
  }
  .card-item-val {
    word-wrap: break-word;
  }
  .card-item-title {
    color: #79a8a9;
    font-weight: bold;
    padding: 0 10px;
  }
}
</style>
