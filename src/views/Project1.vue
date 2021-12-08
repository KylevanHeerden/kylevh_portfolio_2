<template>
  <v-container fluid class="mb-10">
    <v-row class="appRow mx-5 mt-7">
      <v-scroll-y-transition>
        <v-btn to="/about" elevation="0" color="background" text class="pb-5">
          <v-img
            lazy-src="https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
            max-height="150"
            max-width="250"
            src="https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
          ></v-img>
        </v-btn>
      </v-scroll-y-transition>
      <v-spacer> </v-spacer>

      <v-btn
        small
        dark
        color="white"
        outlined
        href="https://nanodyn-software-vis.web.app/"
        target="_blank"
      >
        Demo
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="d-flex flex-column">
      <div class="project_title mb-12">Data Visualisation with D3js</div>

      <v-row align-content="center" justify="center" class="stack mb-7">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on">
              <span>&#60; &#47;&#62;</span>
            </v-avatar>
          </template>
          <span>HTML</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on"> {..} </v-avatar>
          </template>
          <span>CSS</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on"> D3 </v-avatar>
          </template>
          <span>D3js</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on"> TS </v-avatar>
          </template>
          <span>TypeScript</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on">
              <v-img
                src="@/assets/vue_white2.png"
                max-height="45%"
                max-width="45%"
              ></v-img>
            </v-avatar>
          </template>
          <span>Vue.js</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on">
              <v-img
                src="@/assets/firebase_white.png"
                max-height="35"
                max-width="25"
              >
              </v-img>
            </v-avatar>
          </template>
          <span>Firebase</span>
        </v-tooltip>
      </v-row>

      <v-col cols="12" sm="8" md="8" align="center">
        <div class="mb-5">
          An interactive visualization dipicting software architecture of a
          company. The outer rings (outside the lines) focus on the various
          third party software utilised within the company. The smaller groups
          of coloured circles represent data storage and cybersecurity
          properties available for the respective software. The inner ring (on
          the inside of the lines) concentrates on the various departments the
          company comprise of.
        </div>
        <v-img
          max-height="50vh"
          max-width="50vw"
          width
          src="@/assets/software_mac.png"
        ></v-img>

        <div class="mt-5">
          These two main circular areas are connected by lines that change
          depending on which area you hover over (or click on mobile). Hovering
          over a department's name shows all the software used within the
          department. Hovering over a software pil instead shows the reverse;
          which the department uses the software. Finally, hovering over a group
          of colored circles will reveal the data storage and cybersecurity
          properties unique to the specific software.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => {
    return {};
  },
});
</script>

<style scoped>
.appRow {
  height: 10vh;
  z-index: 1;
}

.project_title {
  font-family: "Vollkorn", serif;
  font-size: 67px;
  line-height: 70px;
  font-weight: 400;
  color: white;
}

.v-avatar {
  margin-left: 1rem;
  border: 1px solid white;
}
</style>
