<template>
  <div class="workcard-container">
    <div>
      <span class="work-name">{{ name.toUpperCase() }}</span>
    </div>
    <p class="work-title-container">
      <span class="work-title">Year:</span>
      <span>{{ year }}</span>
    </p>
    <p>
      <span class="work-title">Role:</span>
      <span>{{ role }}</span>
    </p>
    <p class="work-clients">Clients:</p>
    <div v-if="clients.length > 0">
      <div
        v-for="(clientItem, clientIndex) in clients"
        v-bind:key="clientIndex"
      >
        <p>
          <span class="work-title">Name:</span>
          <span>{{ clientItem.name.toUpperCase() }}</span>
        </p>
        <p>
          <span class="work-title">Mini Description:</span>
          <span>{{ clientItem.miniDesc }}</span>
        </p>
        <p>
          <span class="work-title">Engagement:</span>
          <span>{{ clientItem.engagement }}</span>
        </p>
        <p>
          <span class="work-title">Technologies Used:</span>
          <span>{{ clientItem.technologies }}</span>
        </p>
        <p class="work-title">Responsibilities:</p>
        <ul
          v-for="(resp, respIndex) in clientItem.responsibilities"
          v-bind:key="respIndex"
        >
          <li class="work-responsibility">
            <span>{{ respIndex + 1 }}.</span>
            {{ resp }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  props: ["name", "year", "role", "clients"]
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.workcard-container {
  border: 1px solid $nav-header;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.14);
  margin: 20px 20px 50px 20px;
  line-height: 20px;
  .work-name {
    border-bottom: 2px solid $title;
    color: $header;
    font-weight: bold;
    height: 30px;
    line-height: 1px;
    letter-spacing: 1px;
    font-size: 20px;
  }
  .work-title-container {
    margin-top: 20px;
  }
  .work-title {
    font-weight: bold;
    padding: 0 5px 0 0;
  }
  p {
    margin: 10px 0;
  }
  .work-clients {
    color: $title;
    font-weight: bold;
    font-size: 16px;
  }
}
</style>
