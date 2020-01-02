<template>
  <div>
    <div class="profile-container">
      <img :src="image" alt="profile picture" />
    </div>
  </div>
</template>

<script>
import ProfileImage from "@/assets/images/profile.svg";
export default {
  name: "ProfilePhoto",
  data: () => {
    return {
      image: ProfileImage
    };
  }
};
</script>

<style lang="scss">
.profile-container {
  img {
    width: 100%;
    height: inherit;
  }
}
</style>
