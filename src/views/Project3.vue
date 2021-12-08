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
        href="https://ladame-necessites.web.app/"
        target="_blank"
      >
        Demo
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="d-flex flex-column">
      <div class="project_title mb-12">Household Shopping List Solution</div>

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
            <v-avatar size="56" v-bind="attrs" v-on="on"> TS </v-avatar>
          </template>
          <span>TypeScript</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="56" v-bind="attrs" v-on="on"> PWA </v-avatar>
          </template>
          <span>Progressive Web App</span>
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
        <div class="pb-5">
          A progressive web application solving an everyday problem of
          forgetting what to buy at the store. The app allows the multiple users
          to make a joint shopping list. Each item can be check when the item is
          placed in the users shopping basket. Items can be deleted after they
          have been check. Users can also indicate wether they will be attending
          dinner at home that day or will they be eating out allowing for clear
          communication among house members.
        </div>
        <v-row class="d-flex flew-row pt-5 pb-5" justify="center">
          <v-img
            max-height="50vh"
            max-width="10vw"
            width
            src="@/assets/LD_mac.png"
            class="pt-5"
          ></v-img>
          <v-img
            max-height="50vh"
            max-width="10vw"
            width
            src="@/assets/LD_mac2.png"
            class="pt-5"
          ></v-img>
          <v-img
            max-height="50vh"
            max-width="10vw"
            width
            src="@/assets/LD_mac3.png"
            class="pt-5"
          ></v-img>
          <v-img
            max-height="50vh"
            max-width="10vw"
            width
            src="@/assets/LD_mac3.png"
            class="pt-5"
          ></v-img>
        </v-row>

        <div class="mt-5">
          This application was built for the intent to be used on a mobile
          device but is also compatible on desktop. A changeable color theme was
          an additional feature for learning purposes.
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
