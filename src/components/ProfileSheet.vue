<template>
  <v-row class="headingRow" justify="start" align="end">
    <div class="morph-wrap">
      <svg class="morph" width="1400" height="770" viewBox="0 0 1400 770">
        <path fill="#1a1a1a" :d="shapes[4].path" />
      </svg>
    </div>

    <div class="content d-flex flex-column mb-7">
      <div class="name_row">
        <v-scroll-y-reverse-transition>
          <div v-if="name_timer" class="name">Kyle van Heerden</div>
        </v-scroll-y-reverse-transition>
      </div>

      <v-divider></v-divider>

      <div class="sub_name_row mt-3">
        <v-scroll-y-reverse-transition>
          <div v-if="sub_name_timer" class="sub_name">
            A developer looking to change the world
          </div>
        </v-scroll-y-reverse-transition>
      </div>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

// Utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import anime from "animejs";

export default Vue.extend({
  data: () => {
    return {
      name_timer: false,
      divider_timer: false,
      sub_name_timer: false,
    };
  },

  computed: {
    shapes() {
      return this.$store.state.shapes;
    },
  },

  methods: {
    timer() {
      setTimeout(() => {
        this.sub_name_timer = !this.sub_name_timer;
      }, 3600);

      setTimeout(() => {
        this.name_timer = !this.name_timer;
      }, 3000);

      setTimeout(() => {
        this.divider_timer = !this.divider_timer;
      }, 2300);
    },

    initShapeLoop(el: number): void {
      anime.remove(".morph path");
      anime({
        targets: ".morph path",
        easing: "linear",
        d: [
          { value: this.shapes[el].pathAlt, duration: 1500 },
          { value: this.shapes[el].path, duration: 1500 },
        ],
        loop: true,
        fill: {
          value: "#1a1a1a",
          duration: this.shapes[el].fill.duration,
          easing: this.shapes[el].fill.easing,
        },
        direction: "alternate",
      });

      // let random = Math.floor(Math.random() * this.shapes[el].options.length);
      // let randNum = this.shapes[el].options[random];
      let randNum = 4;

      anime({
        targets: ".morph",
        duration: this.shapes[randNum].animation.svg.duration,
        easing: this.shapes[randNum].animation.svg.easing,
        elasticity: this.shapes[randNum].animation.svg.elasticity || 0,
        scaleX: this.shapes[randNum].scaleX,
        scaleY: this.shapes[randNum].scaleY,
        translateX: this.shapes[randNum].tx + "px",
        translateY: this.shapes[randNum].ty + "px",
        rotate: this.shapes[randNum].rotate + "deg",
      });
    },
  },

  mounted() {
    this.timer();
    this.initShapeLoop(4);
  },
});
</script>

<style lang="scss" scoped>
.headingRow {
  padding-left: 10rem;
  height: 50vh;
}

.divider {
}

.theme--dark.v-divider {
  border-color: white;
}

.name_row {
  height: 80px;
  padding: 0;
}

.name {
  font-family: "Vollkorn", serif;
  font-size: 67px;
  line-height: 70px;
  font-weight: 400;
  color: white;
}

.sub_name_row {
  height: 50px;
  padding: 0;
}

.sub_name {
  font-size: 25px;
  line-height: 28px;
  font-weight: 300;
  color: grey;
}

.content {
  z-index: 1;
}

/* SVG Morph */
.morph-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
}

.morph {
  position: relative;
  height: 100%;
  fill: var(--background-color-2);
  flex: none;
}
</style>
