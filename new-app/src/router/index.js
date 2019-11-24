import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Others from "@/components/Others";
import Experience from "@/components/Experience";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
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
  routes
});

export default router;
