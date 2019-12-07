import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Others from "@/components/Others";
import Experience from "@/components/Experience";
import PageNotFound from "@/components/PageNotFound";

import CONSTANTS from "@/constants.js";

Vue.use(VueRouter);

const checkMobileBrowser = () =>
  navigator.userAgent.toLowerCase().includes(CONSTANTS.IPHONE) ||
  navigator.userAgent.toLowerCase().includes(CONSTANTS.ANDROID);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
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
    path: "/others",
    name: "others",
    component: Others
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "*",
    name: "pagenotfound",
    component: PageNotFound
  }
];

const mobileRoutes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
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
    path: "/others",
    name: "others",
    component: Others
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: checkMobileBrowser() ? mobileRoutes : routes
});

export default router;
