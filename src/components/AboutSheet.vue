<template>
  <v-row align="center" justify="center" class="content">
    <v-col cols="12" sm="6" md="6">
      <v-card flat color="transparent" class="ml-12 mr-5">
        <div class="about_title mb-5">About Me</div>

        <div class="about_text">
          Constantly seeking adventure - whether its learning the newest
          variation of JS that makes browsers sing or running up a local
          mountian. Living by Abraham Lincoln's words, “The best way to predict
          the future is to create it”, allows for constant excitement of the
          unknown. Creating beautiful things with beautiful code is what I do.
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="6">
      <div class="tagcloud"></div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

// Utils

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import TagCloud from "TagCloud";

export default Vue.extend({
  data: () => {
    return {};
  },

  methods: {
    cloud() {
      const container = ".tagcloud";
      const texts = [
        "Vuejs",
        "Firebase",
        "GCP",
        "RoR",
        "Rust",
        "Python",
        "HTML",
        "CSS",
        "SCSS",
        "TypeScript",
        "Vuetify",
        "Git",
        "Plotly",
        "PWA",
      ];
      const options = { radius: 300, maxSpeed: "normal", initSpeed: "normal" };

      TagCloud(container, texts, options);
    },
  },

  mounted() {
    this.cloud();
  },
});
</script>

<style scoped>
.content {
  z-index: 100;
}

.about_title {
  font-family: "Vollkorn", serif;
  font-size: 67px;
  line-height: 70px;
  font-weight: 400;
  color: white;
}

.about_text {
  font-size: 18px;
  line-height: 23px;
  font-weight: 300;
  color: grey;
}
</style>
