import Vue from "vue";
import Vuex from "vuex";
import ACTIONS from "@/actions.constants.js";
import MUTATIONS from "@/mutations.constants.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aboutData: [{ key: "Name", value: "Keerthi Mohan" }],
    contactData: [
      { key: "Email", value: "keerthi.n.mohan@gmail.com" },
      {
        key: "Github",
        value: "https://github.com/keerthimohan93",
        type: "link"
      },
      {
        key: "LinkedIn",
        value: "https://in.linkedin.com/in/keerthi-mohan-uideveloper",
        type: "link"
      }
    ],
    summary: {
      briefText: "Hi,",
      introText: "this is Keerthi Mohan!",
      introSummary:
        "A self-motivated web developer with a flair for creating elegant solutions by having the knowledge and proficiency in JavaScript, HTML, CSS and mobile responsive web development as well as skills and ability in writing clean and efficient code. 3+ years of experience in front end web development. Experienced in JavaScript frameworks, responsive web design and user accessibility. Ability to provide solutions from a functional and technical perspective to meet deadlines. Also, exposed to agile methods of development."
    },
    skillsData: [
      { key: "Programming Languages", value: "HTML5, CSS3, JavaScript" },
      { key: "CSS Technologies", value: "SASS, Bootstrap, Bulma" },
      {
        key: "JavaScript Technologies",
        value:
          "jQuery, es6, ReactJS, Redux, Redux Saga, VueJS, Webpack and exposed to NodeJS"
      },
      { key: "Database", value: "MySQL" },
      {
        key: "Tools Known",
        value: "Zeplin, Adobe Photoshop, NVDA, JIRA, GIT and Fiddler"
      },
      { key: "Testing Frameworks", value: "Exposed to Karma and Jest" }
    ],
    educationData: [
      {
        key: "Bachelor of Engineering",
        value:
          "PES Institute of Technology (Information Science and Engineering)"
      },
      {
        key: "Pre University",
        value: "Christ Junior College (Science Stream)"
      },
      {
        key: "School",
        value: "Bethany High School"
      }
    ],
    accomplishMentsData: [
      {
        key: "Awards and Accolades",
        value: "Star Performer of the Year 2018 (Y Media Labs)"
      }
    ],
    referencesData: [{ key: "References", value: "Given on Request" }],
    experienceData: [
      {
        id: 1,
        name: "Y Media Labs",
        year: "2018 - Present",
        role: "Software Engineer",
        clients: [
          {
            name: "LECET",
            miniDesc:
              "A searchable database for LUINA affiliates to get the latest information about projects coming to their area. MEP also provides market research and business news service.",
            engagement: "Complete Website Development",
            technologies: "ES6, ReactJS, Redux, Redux-Saga, SASS",
            responsibilities: [
              "Involved in understanding the client requirements and developing various components as per the requirements.",
              "Developed UI for many components across the website.",
              "Unit Testing of all components by writing test cases.",
              "Actively using GIT for version control."
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Publicis Sapient",
        year: "June 2016 - October 2018",
        role: "Associate Experience Technology",
        clients: [
          {
            name: "Bed Bath & Beyond",
            miniDesc:
              "Bed Bath & Beyond Inc. is an American chain of domestic merchandise retail stores in the United States, Puerto Rico, Canada and Mexico. Founded in 1971, the stores sell home goods, primarily for bedroom and bathroom, as well as kitchen and dining room.",
            engagement: "Development, Enhancements and Website Redesign",
            technologies:
              "jQuery, CSS3, HTML5, BootStrap, JavaScript, JSP, ReactJS, Redux, SASS",
            responsibilities: [
              "Part of the development and enhancement track.",
              "Developed components and modified existing components to meet client requirements.",
              "Triage the story and given estimations",
              "Implementation of various features",
              "Built mobile responsive web components"
            ]
          },
          {
            name: "Verizon Wireless",
            miniDesc:
              "Verizon Wireless is an American telecommunications company which offers wireless products and services. It is the largest wireless telecommunications provider in the United States.",
            engagement: "Enhancements",
            technologies: "HTML5, jQuery, ReactJS, Redux",
            responsibilities: [
              "Developed UI for many components across the website.",
              "Actively worked on production bug fixes."
            ]
          }
        ]
      }
    ],
    hamburgerStatus: false,
    loggedIn: false
  },
  mutations: {
    [MUTATIONS.SET_HAMBURGER_STATUS]: function(state, payload) {
      state.hamburgerStatus = payload.value;
    },
    [MUTATIONS.LOGGED_IN]: function(state, payload) {
      state.loggedIn = payload.value;
    }
  },
  actions: {
    [ACTIONS.SET_MENU_STATUS]({ commit }, payload) {
      commit(MUTATIONS.SET_HAMBURGER_STATUS, payload);
    },
    [ACTIONS.SET_LOGGED_IN_STATUS]({ commit }, payload) {
      commit(MUTATIONS.LOGGED_IN, payload);
    }
  },
  modules: {},
  getters: {
    aboutData: state => {
      return state.aboutData;
    },
    contactData: state => {
      return state.contactData;
    },
    homeSummary: state => {
      return state.summary;
    },
    skillsData: state => {
      return state.skillsData;
    },
    educationData: state => {
      return state.educationData;
    },
    accomplishMentsData: state => {
      return state.accomplishMentsData;
    },
    referencesData: state => {
      return state.referencesData;
    },
    experienceData: state => {
      return state.experienceData;
    },
    getHambugerStatus: state => {
      return state.hamburgerStatus;
    },
    getLoggedInStatus: state => {
      return state.loggedIn;
    }
  }
});
