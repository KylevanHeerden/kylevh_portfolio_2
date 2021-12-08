<template>
  <v-container class="about d-flex flex-column" fluid>
    <v-row class="appRow mx-5 mt-7">
      <v-scroll-y-transition>
        <v-btn
          v-if="image_timer"
          to="/"
          elevation="0"
          color="background"
          text
          class="pb-5"
        >
          <v-img
            lazy-src="https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
            max-height="150"
            max-width="250"
            src="https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
          ></v-img>
        </v-btn>
      </v-scroll-y-transition>

      <v-spacer></v-spacer>

      <v-scroll-y-transition>
        <v-btn
          v-if="projects_timer"
          text
          class="font-weight-light"
          @click="goto('projects')"
        >
          PROJECTS
        </v-btn>
      </v-scroll-y-transition>
      <v-scroll-y-transition>
        <v-btn
          v-if="about_timer"
          text
          class="font-weight-light"
          @click="goto('about')"
          >ABOUT</v-btn
        >
      </v-scroll-y-transition>
      <v-scroll-y-transition>
        <v-btn
          v-if="resume_timer"
          text
          class="font-weight-light"
          href="https://firebasestorage.googleapis.com/v0/b/kylevh-portfolio.appspot.com/o/Kyle_CV.pdf?alt=media&token=04e3db8a-ca1c-4c27-af51-4115f09c4429"
          target="__blank"
        >
          RESUME
        </v-btn>
      </v-scroll-y-transition>
    </v-row>
    <v-sheet
      color="background"
      height="90vh"
      width="100%"
      align="end"
      ref="profile"
      id="profile"
    >
      <ProfileSheet></ProfileSheet>
      <v-fade-transition>
        <a
          class="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
          v-if="scroll_timer"
        ></a>
      </v-fade-transition>
    </v-sheet>

    <v-sheet
      color="background"
      height="120vh"
      width="100%"
      ref="projects"
      id="projects"
    >
      <v-row justify="center" class="mx-3 mt-3">
        <ProjectsSheet></ProjectsSheet>
      </v-row>
    </v-sheet>
    <v-sheet
      color="background"
      height="100vh"
      width="100%"
      ref="about"
      id="about"
    >
      <AboutSheet class="mt-7"></AboutSheet>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import ProfileSheet from "@/components/ProfileSheet.vue";
import ProjectsSheet from "@/components/ProjectsSheet.vue";
import AboutSheet from "@/components/AboutSheet.vue";

export default Vue.extend({
  components: { ProfileSheet, ProjectsSheet, AboutSheet },

  data: () => {
    return {
      image_timer: false,
      projects_timer: false,
      about_timer: false,
      resume_timer: false,
      scroll_timer: false,
    };
  },

  methods: {
    timer() {
      setTimeout(() => {
        this.image_timer = !this.image_timer;
      }, 1000);

      setTimeout(() => {
        this.scroll_timer = !this.scroll_timer;
      }, 3500);

      setTimeout(() => {
        this.projects_timer = !this.projects_timer;
      }, 2300);

      setTimeout(() => {
        this.about_timer = !this.about_timer;
      }, 2000);

      setTimeout(() => {
        this.resume_timer = !this.resume_timer;
      }, 1700);
    },

    goto(id: string): void {
      document?.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    },
  },

  mounted() {
    this.timer();
  },
});
</script>

<style scoped>
.appRow {
  height: 10vh;
  z-index: 1;
}

[data-ca3_icon]::before {
  font-weight: normal;
  content: attr(data-ca3_icon);
}

.ca3-scroll-down-arrow {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
  background-size: contain;
  background-repeat: no-repeat;
}

.ca3-scroll-down-link {
  cursor: pointer;
  height: 40px;
  width: 60px;
  margin: 0px 0 0 -40px;
  line-height: 60px;
  position: absolute;
  left: 97%;
  bottom: 69%;
  color: #fff;
  text-align: center;
  font-size: 70px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

  -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
  -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
  animation: ca3_fade_move_down 2s ease-in-out infinite;
}

@-webkit-keyframes ca3_fade_move_down {
  0% {
    -webkit-transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
}
@-moz-keyframes ca3_fade_move_down {
  0% {
    -moz-transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: translate(0, 20px);
    opacity: 0;
  }
}
@keyframes ca3_fade_move_down {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 20px);
    opacity: 0;
  }
}
</style>
