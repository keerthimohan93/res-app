<template>
  <div class="login-container">
    <p
      v-if="success"
      class="success-msg msg-animation"
      v-on:animationend="handleAnimationEnd"
    >
      Signed up successfully!
    </p>
    <p
      v-if="error"
      class="error-msg msg-animation"
      v-on:animationend="handleAnimationEnd"
    >
      Sign up failed.
    </p>
    <h2 v-if="!signup">Sign In</h2>
    <h2 v-if="signup">Sign Up</h2>
    <div>
      <input
        placeholder="Email"
        type="email"
        class="login-input"
        v-on:change="handleEmailChange"
      />
    </div>
    <div>
      <input
        placeholder="Password"
        type="password"
        class="login-input"
        v-on:change="handlePasswordChange"
      />
    </div>
    <button class="log-in-btn" v-if="signup" v-on:click="handleSignUpFunc">
      Sign Up
    </button>
    <div v-if="!signup">
      <button class="log-in-btn" @click="handleLoginFunc">Log In</button>
      <div class="or-container">-- OR --</div>
      <div>
        <img
          :src="image"
          v-on:click="handleGoogleSignin"
          alt="google sign in"
          class="google-sign-in"
        />
      </div>
      <div v-if="errorMsg !== ''" class="login-error-msg">{{ errorMsg }}</div>
      <p class="sign-up-text">
        Don't have an account?
        <span class="sign-up" v-on:click="handleSignUp">Sign Up!</span>
      </p>
    </div>
    <p class="sign-up-text" v-if="signup">
      Go back to Login?
      <span class="sign-up" v-on:click="handleLogin">Login.</span>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
import ACTIONS from "@/actions.constants.js";
import googleImage from "@/assets/btn_google_signin_light_pressed_web.png";
export default {
  data() {
    return {
      errorMsg: "",
      image: googleImage,
      signup: false,
      email: "",
      password: "",
      success: false,
      error: false
    };
  },
  name: "Login",
  methods: {
    handleGoogleSignin: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.errorMsg = "";
          this.$router.replace("/home/summary");
          this.$store.dispatch(ACTIONS.SET_LOGGED_IN_STATUS, { value: true });
        })
        .catch(err => {
          this.errorMsg = err.message;
        });
    },
    handleSignUp: function() {
      this.signup = true;
      this.email = "";
      this.password = "";
    },
    handleLogin: function() {
      this.signup = false;
      this.email = "";
      this.password = "";
    },
    handleSignUpFunc: function() {
      this.success = false;
      this.error = false;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.success = true;
          this.signup = false;
          this.email = "";
          this.password = "";
        })
        .catch(() => {});
    },
    handleEmailChange: function(e) {
      this.email = e.target.value;
    },
    handlePasswordChange: function(e) {
      this.password = e.target.value;
    },
    handleLoginFunc: function() {
      this.success = false;
      this.error = false;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.errorMsg = "";
          this.$router.replace("/home/summary");
        })
        .catch(err => {
          this.errorMsg = err.message;
        });
    },
    handleAnimationEnd: function() {
      this.error = false;
      this.success = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";
.login-container {
  text-align: center;
  position: fixed;
  top: 30%;
  left: 35%;
  h2 {
    color: $header;
    font-weight: bold;
    font-size: 20px;
  }
  .login-input {
    background: transparent;
    width: 400px;
    height: 30px;
    border: none;
    border-bottom: 1px solid $header;
    margin: 20px;
    box-sizing: border-box;
    outline: none;
  }
  .log-in-btn {
    width: auto;
    height: 40px;
    border: none;
    background: $header;
    color: $white;
    width: 100px;
    margin: 20px 0 0 0;
    box-sizing: border-box;
    cursor: pointer;
  }
  .google-sign-in {
    cursor: pointer;
  }
  .or-container,
  .sign-up-text {
    color: $header;
    margin: 20px;
  }
  .error-msg {
    background: $red;
    color: $white;
    width: auto;
    min-width: 200px;
    height: 30px;
    border-radius: 2px;
    padding: 2px 0 10px 0;
    box-sizing: border-box;
  }
  .login-error-msg {
    color: $red;
  }
  .success-msg {
    color: $white;
    font-weight: bold;
    background: $green;
    width: auto;
    min-width: 200px;
    height: 30px;
    border-radius: 2px;
    padding: 2px 0 10px 0;
    box-sizing: border-box;
  }
  .sign-up {
    font-weight: bold;
    cursor: pointer;
  }
  .msg-animation {
    animation: msgAnimation ease 0.8s;
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
  }
}
@media (min-width: 360px) and (max-width: 740px) {
  .login-container {
    margin-top: 30%;
    left: 0;
    top: 0;
    position: static;

    .login-input {
      width: 200px;
    }
  }
}
</style>
