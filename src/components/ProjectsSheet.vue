<template>
  <v-row class="bigRow" justify="center" align="center">
    <v-col cols="12" sm="6" md="6" class="d-flex flex-column column1">
      <v-lazy
        v-model="isActive1"
        :options="{
          threshold: 0.8,
        }"
        min-height="70%"
        class="mb-3"
        transition="scroll-x-transition"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mb-3 card1">
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="black"
                  @click="to('project1')"
                >
                  <div class="seeMore">CLICK TO SEE MORE</div>
                </v-overlay>
              </v-fade-transition>

              <v-img height="100%" src="@/assets/software_vis.png"></v-img>
            </v-card>
          </template>
        </v-hover>
      </v-lazy>

      <v-lazy
        v-model="isActive2"
        :options="{
          threshold: 0.8,
        }"
        min-height="28%"
        transition="scroll-x-transition"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="card2">
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="black"
                  @click="to('project2')"
                >
                  <div class="seeMore">CLICK TO SEE MORE</div>
                </v-overlay>
              </v-fade-transition>

              <v-img height="100%" src="@/assets/purchaseapp2.png"></v-img>
              <v-fade-transition>
                <v-overlay v-if="!hover" absolute> </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-lazy>
    </v-col>
    <v-col cols="12" sm="4" md="4" class="d-flex flex-column column2">
      <v-row>
        <v-col cols="12" sm="12" md="12" class="d-flex flex-row topRightColumn">
          <v-lazy
            v-model="isActive3"
            :options="{
              threshold: 0.6,
            }"
            min-width="50%"
            class="mr-3"
            transition="scroll-x-reverse-transition"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="card3">
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="black"
                      @click="to('project3')"
                    >
                      <div class="seeMore">CLICK TO SEE MORE</div>
                    </v-overlay>
                  </v-fade-transition>

                  <v-img height="100%" src="@/assets/ladame.jpeg"></v-img>
                </v-card>
              </template>
            </v-hover>
          </v-lazy>

          <v-lazy
            v-model="isActive4"
            :options="{
              threshold: 0.9,
            }"
            min-width="47%"
            transition="scroll-x-reverse-transition"
          >
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="card4">
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="black"
                      @click="to('project4')"
                    >
                      <div class="seeMore">CLICK TO SEE MORE</div>
                    </v-overlay>
                  </v-fade-transition>

                  <v-img height="100%" src="@/assets/aim.png"></v-img>
                </v-card>
              </template>
            </v-hover>
          </v-lazy>
        </v-col>
      </v-row>

      <v-lazy
        v-model="isActive5"
        :options="{
          threshold: 0.8,
        }"
        min-height="26%"
        class="mt-7"
        transition="scroll-x-transition"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="card5" elevation="5">
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="black"
                  @click="to('project5')"
                >
                  <div class="seeMore">CLICK TO SEE MORE</div>
                </v-overlay>
              </v-fade-transition>

              <v-img height="100%" src="@/assets/stonks.png"> </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-lazy>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

// utils

export default Vue.extend({
  data: () => {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
    };
  },

  methods: {
    to(page: string): void {
      this.$router.push(`/${page}`);
    },
  },
});
</script>

<style scoped>
.bigRow {
  height: 100vh;
  width: 70%;
}

.column1 {
  height: 80%;
  /* background-color: red; */
}

.column2 {
  height: 80%;
  /* background-color: blue; */
  padding-left: 0;
}

.topRightColumn {
  /* background-color: pink; */
  padding-bottom: 0;
}

.card1 {
  height: 100%;
}

.card2 {
  height: 100%;
}

.card3 {
  width: 100%;
  height: 100%;
}

.card4 {
  width: 100%;
  height: 100%;
}

.card5 {
  height: 100%;
  width: 100%;
}

.seeMore {
  font-weight: lighter;
}
</style>
