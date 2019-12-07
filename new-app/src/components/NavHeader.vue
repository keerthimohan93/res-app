<template>
  <div>
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/home">Home</router-link>
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
          <router-link to="/contact">Contact</router-link>
        </li>
        <!-- <li class="nav-item">
        <router-link to="/about">About</router-link>
        </li>-->
      </ul>
    </div>
    <div class="mob-nav-container" v-if="getHambugerStatus">
      <ul class="nav-list" v-on:click="handleMenuClick">
        <li class="nav-item">
          <router-link to="/home">Home</router-link>
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
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ACTIONS from "@/actions.constants.js";
export default {
  name: "NavHeader",
  computed: {
    ...mapGetters(["getHambugerStatus"])
  },
  methods: {
    handleMenuClick: function() {
      this.$store.dispatch(ACTIONS.SET_MENU_STATUS, {
        value: false
      });
    }
  }
};
</script>

<style lang="scss">
.nav-container {
  background-color: #aacfd0;
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
      margin: 50px 0;
      cursor: pointer;
    }
  }
}
.mob-nav-container {
  display: none;
}
@media (min-width: 360px) and (max-width: 740px) {
  .nav-container {
    display: none;
  }
  .mob-nav-container {
    display: block;
    background-color: #aacfd0;
    width: 40%;
    position: fixed;
    top: 75px;
    left: 0;
    z-index: 100;
    height: 100%;
    animation: mobile-sidebar-animation 0.3s ease;
    .nav-list {
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      .nav-item {
        color: #000;
        margin: 40px 0;
        cursor: pointer;
      }
    }
  }
}
</style>

