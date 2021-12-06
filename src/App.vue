<template>
  <v-app>
    <v-app-bar app dark flat color="background"> </v-app-bar>

    <v-main>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style scoped>
.theme--dark.v-application {
  background-color: var(--v-background-base);
  color: var(--v-text-lighten2);
}
</style>
