<template>
  <div>
    <div class="header-container">
      <div class="hamburger-menu">
        <img :src="image" alt="hamburger icon" v-on:click="handleMenuClick" />
      </div>
    </div>
    <div v-if="getLoggedInStatusMethod()">
      <NavHeader />
    </div>
  </div>
</template>

<script>
import hamburgerIcon from "@/assets/images/hamburger-white.svg";
import NavHeader from "@/components/NavHeader.vue";
import { mapGetters } from "vuex";
import ACTIONS from "@/actions.constants.js";
import currentSession from "@/authService.js";
export default {
  name: "Header",
  components: {
    NavHeader
  },
  data: function() {
    return {
      image: hamburgerIcon
    };
  },
  computed: {
    ...mapGetters(["getHambugerStatus", "getLoggedInStatus"])
  },
  methods: {
    handleMenuClick: function() {
      let clickStatus = this.getHambugerStatus;
      this.$store.dispatch(ACTIONS.SET_MENU_STATUS, {
        value: !clickStatus
      });
    },
    getLoggedInStatusMethod: function() {
      return currentSession() || this.getLoggedInStatus;
    }
  },
  watch: {
    currentSession: Function
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.header-container {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 0;
  z-index: 100;
  height: 50px;
  background: $nav-header;
  width: 8%;
  h2 {
    color: $white;
    font-size: 30px;
    margin: 0 auto;
  }
}
.profile-pic-section {
  padding: 0 30px 10px 0;
}
.hamburger-menu {
  display: none;
  img {
    width: 50px;
    height: 50px;
  }
}
.profile-icon {
  img {
    width: 30px;
    height: 30px;
  }
}
@media (min-width: 340px) and (max-width: 740px) {
  .header-container {
    width: 100%;
    background: $header;
  }
  .hamburger-menu {
    display: block;
    cursor: pointer;
  }
}
</style>
