<template>
  <div>
    <div class="nav-container">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/education">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experience">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/others">Others</router-link>
        </li>
      </ul>
      <div class="nav-item" v-on:click="handleSignOut">Logout</div>
    </div>
    <div class="mob-nav-container" v-if="getHambugerStatus">
      <ul class="nav-list" v-on:click="handleMenuClick">
        <li class="nav-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/education">Education</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skills">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/experience">Experience</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/others">Others</router-link>
        </li>
      </ul>
      <div class="nav-item" v-on:click="handleSignOut">Logout</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import ACTIONS from "@/actions.constants.js";
import currentSession from "@/authService";
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
    },
    handleSignOut: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          currentSession();
          this.$store.dispatch(ACTIONS.SET_LOGGED_IN_STATUS, { value: false });
          this.$router.push("login");
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.nav-container {
  background-color: $nav-header;
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
  }
  .nav-item {
    color: $black;
    margin: 50px 0;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
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
    background-color: $nav-header;
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
        color: $black;
        margin: 40px 0;
        cursor: pointer;
      }
    }
  }
}
</style>
