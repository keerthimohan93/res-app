<template>
  <div class="listing-container">
    <div class="my-work-container">
      <div class="my-work-video-container">
        <h2>QUIZZY</h2>
        <p>A simple quiz application having various interesting topics to choose from.</p>
        <p>
          <span>Tech Stack Used:</span>Vue, VueX, Bulma CSS
        </p>
        <p>
          <span>URL:</span>
          <a
            href="https://quizzy.netlify.com"
            rel="no-opener no-referer"
            target="_blank"
          >https://quizzy.netlify.com</a>
        </p>
        <video class="work-grid" autoplay loop playinline>
          <source :src="quizzy" type="video/webm">
        </video>
      </div>
      <div class="my-work-video-container">
        <h2>CHAT APP</h2>
        <p>A simple chat application</p>
        <p>
          <span>Tech Stack Used:</span>SOCKET IO, HTML, JAVASCRIPT
        </p>
        <p>
          <span>URL:</span>
          <a
            href="https://simple-chatapp-socket.herokuapp.com"
            rel="no-opener no-referer"
            target="_blank"
          >https://simple-chatapp-socket.herokuapp.com</a>
        </p>
        <video class="work-grid" autoplay loop playinline>
          <source :src="chat" type="video/webm">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import quizzyVideo from "@/assets/videos/QUIZZY.webm";
import socketIOChat from "@/assets/videos/SocketIOchat.webm";
export default {
  name: "MyWork",
  data() {
    return {
      quizzy: quizzyVideo,
      chat: socketIOChat
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.my-work-container {
  .work-grid {
    width: 90%;
    height: auto;
    margin: 20px;
    box-sizing: border-box;
  }
  .my-work-video-container {
    video {
      text-align: center;
    }
    h2 {
      color: $title;
      font-size: 18px;
      font-weight: bold;
      margin: 20px 0 0 0;
    }
    p {
      font-size: 16px;
      padding: 10px 0 0 0;
      span {
        font-weight: bold;
        padding: 0 5px 0 0;
      }
    }
  }
}
</style>
