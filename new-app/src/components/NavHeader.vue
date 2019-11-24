<template>
  <div class="nav-container">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/home">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/skills">Skills</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/education">Education</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/experience">Work Experience</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/others">Others</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavHeader"
};
</script>

<style lang="scss">
.nav-container {
  background-color: #e1f0f6;
  width: 20%;
  position: fixed;
  top: 75px;
  left: 0;
  z-index: 100;
  height: 100%;
  .nav-list {
    padding-top: 10px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    .nav-item {
      color: #000;
      margin-top: 25px;
      cursor: pointer;
    }
  }
}
</style>

