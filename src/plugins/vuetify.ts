import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

import colors from "vuetify/lib/util/colors";

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        text: colors.grey.darken2,
      },
      dark: {
        primary: "#35363A",
        secondary: colors.deepOrange,
        background: colors.grey.darken4,
        text: colors.grey,
      },
    },
    options: { customProperties: true },
  },
});
