<template>
  <div class="workcard-container">
    <div v-if="data.length>0">
      <div v-for="(item,index) in data" v-bind:key="index">
        <p>
          <span>Name:</span>
          <span>{{ item.name }}</span>
        </p>
        <p>
          <span>Year:</span>
          <span>{{ item.year }}</span>
        </p>
        <p>
          <span>Role:</span>
          <span>{{ item.role }}</span>
        </p>
        <p>Clients:</p>
        <div v-if="item.clients.length > 0">
          <div v-for="(clientItem,clientIndex) in item.clients" v-bind:key="clientIndex">
            <p>
              <span>Name:</span>
              <span>{{ clientItem.name }}</span>
            </p>
            <p>
              <span>Mini Description:</span>
              <span>{{ clientItem.miniDesc }}</span>
            </p>
            <p>
              <span>Engagement:</span>
              <span>{{ clientItem.engagement }}</span>
            </p>
            <p>
              <span>Technologies Used:</span>
              <span>{{ clientItem.technologies }}</span>
            </p>
            <p>Responsibilities:</p>
            <ul v-for="(resp, respIndex) in clientItem.responsibilities" v-bind:key="respIndex">
              <li>
                <span>{{ respIndex+1 }}.</span>
                {{ resp }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: {
    data: Array
  }
};
</script>

<style lang="scss">
</style>
