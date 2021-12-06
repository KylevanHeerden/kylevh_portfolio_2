<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="row">
      <Gooey></Gooey>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

// Components
import Gooey from "@/components/Gooey.vue";

export default Vue.extend({
  name: "Home",

  components: { Gooey },
});
</script>

<style scoped>
.row {
  height: 80vh;
}
</style>
