<template>
  <div>
    <div class="header-container">
      <div class="hamburger-menu">
        <img :src="image" alt="hamburger icon" v-on:click="handleMenuClick" />
      </div>
      <h2>KEERTHI MOHAN</h2>
    </div>
    <NavHeader />
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
import hamburgerIcon from "@/assets/hamburger.png";
import { mapGetters } from "vuex";
import ACTIONS from "@/actions.constants.js";
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
    ...mapGetters(["getHambugerStatus"])
  },
  methods: {
    handleMenuClick: function() {
      let clickStatus = this.getHambugerStatus;
      this.$store.dispatch(ACTIONS.SET_MENU_STATUS, {
        value: !clickStatus
      });
    }
  }
};
</script>

<style lang="scss">
.header-container {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 75px;
  background: #1f4e5f;
  h2 {
    color: white;
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
@media (min-width: 360px) and (max-width: 740px) {
  .hamburger-menu {
    display: block;
    cursor: pointer;
  }
}
</style>
