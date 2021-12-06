<template>
  <v-container class="about d-flex flex-column" fluid>
    <v-sheet elevation="1" height="100vh" width="100%"></v-sheet>
    <v-sheet color="green" elevation="1" height="100vh" width="100%"></v-sheet>
    <v-sheet color="blue" elevation="1" height="100vh" width="100%"></v-sheet>
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
.row1 {
  background-color: brown;
  height: 100vh;
}

.row1 {
  background-color: green;
  height: 100vh;
}
</style>
