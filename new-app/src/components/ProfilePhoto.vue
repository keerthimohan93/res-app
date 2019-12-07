<template>
  <div>
    <div class="profile-container">
      <img :src="image" alt="profile picture" />
    </div>
  </div>
</template>

<script>
import ProfileImage from "@/assets/Profile_pic.jpg";
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
    width: inherit;
    height: 70vh;
  }
}
</style>
