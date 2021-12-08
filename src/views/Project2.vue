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
        href="https://purchase-app-f14b0.firebaseapp.com/"
        target="_blank"
      >
        Demo
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="d-flex flex-column">
      <div class="project_title mb-12">Integrated Procurement System</div>

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
          A different flavour to the everyday trello use. A web application
          mimicking features of an ERP system for a small team within a trello
          like environment. The app allows for user authentication and
          authorisation of actions within the app.
        </div>
        <v-img
          max-height="50vh"
          max-width="50vw"
          width
          src="@/assets/purchaseapp_mac.png"
          class="pt-5"
        ></v-img>

        <div class="mt-5">
          Firebase cloud services such as hosting, storage and cloud functions
          are used to create a better user experience. Files uploaded are stored
          and readily available on all cards. Slack was integrated as the
          communication platform. After specified actions users are notified by
          the slack-bot created for the application. Features such as budget
          alerts and commenting were included as vue components post deployment,
          as requested by customer.
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
