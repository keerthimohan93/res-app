import Vue from "vue";
import VueRouter from "vue-router";
import MainLayout from "@/components/MainLayout.vue";
import Login from "@/components/Login";
import Others from "@/components/Others";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import firebase from "firebase";

Vue.use(VueRouter);

// To check is browser is mobile browser or not

// const checkMobileBrowser = () =>
//   navigator.userAgent.toLowerCase().includes(CONSTANTS.IPHONE) ||
//   navigator.userAgent.toLowerCase().includes(CONSTANTS.ANDROID);

const routes = [
  {
    path: "/home",
    name: "mainlayout",
    component: MainLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "/summary",
        name: "home",
        component: Home
      },
      {
        path: "",
        name: "home",
        component: Home
      },
      {
        path: "/skills",
        name: "skills",
        component: Skills
      },
      {
        path: "/education",
        name: "education",
        component: Education
      },
      {
        path: "/experience",
        name: "experience",
        component: Experience
      },
      {
        path: "/others",
        name: "others",
        component: Others
      },
      {
        path: "/contact",
        name: "contact",
        component: Contact
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("/login");
  else if (!requiresAuth && currentUser) next("/home");
  else next();
});

export default router;
