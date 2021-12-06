<template>
  <div id="svg_container" ref="svg_container"></div>
</template>

<script lang="ts">
import Vue from "vue";

import * as d3 from "d3";
import router from "@/router";

export default Vue.extend({
  data: () => {
    return {};
  },

  methods: {
    createGooey() {
      var height = 800;
      var width = window.innerWidth;

      var n = 50;

      var nodes = d3.range(n).map(function (i) {
        return {
          r: i === 0 ? 0 : 2 * (4 + 9 * Math.random() ** 2),
          color: i === 0 ? "#202124" : "white",
        };
      });

      // the default phyllotaxis arrangement is centered on <0,0> with a distance between nodes of ~10 pixels
      // we will scale & translate it to fit the canvas
      const scale = 0.5;
      const center = [width / 2, height / 2];
      const rescale = isNaN(nodes[0].x);

      const svg = d3
        .select("#svg_container")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
      // .style("background-color", "green");

      var widthMarker = 250;

      var imgContainer = svg
        .append("g")
        .attr("transform", `translate(${width / 2 - 125}, ${height / 3.5})`);

      var img = imgContainer
        .append("svg:image")
        .attr(
          "xlink:href",
          "https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
        )
        .attr("width", widthMarker)
        .attr("height", widthMarker);

      var rect = imgContainer
        .append("rect")
        .attr("width", widthMarker)
        .attr("height", widthMarker)
        .style("fill", "transparent");
      // .style("stroke", "white")
      // .style("stroke-width", "2px");

      rect.on("click", () => {
        this.enterFn();
      });

      var img2 = imgContainer
        .append("svg:image")
        .attr(
          "xlink:href",
          "https://raw.githubusercontent.com/KylevanHeerden/kylevh_portfolio_2/b5cc0d4e5fbef0b9241b0d726aa7fb9e6dbea18b/src/assets/mouse-outline.svg"
        )
        .attr("width", 30)
        .attr("height", 30)
        .attr("x", widthMarker / 2.3)
        .attr("y", widthMarker / 1.3);

      img2.on("click", () => {
        this.enterFn();
      });

      var text = imgContainer
        .append("svg:text")
        .attr("dy", widthMarker / 2 + 125)
        .attr("fill", "black")
        .attr("font-weight", function (d, i) {
          return i * 100 + 100;
        })
        .attr("font-size", "12px")
        .text("Click To Enter");

      text.attr("dx", (widthMarker - text.node().getComputedTextLength()) / 2);

      img2.on("mouseover", () => {
        text.attr("fill", "white");
      });

      img2.on("mouseout", () => {
        text.attr("fill", "black");
      });

      const node = svg
        .append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", (d) => d.r)
        .attr("fill", (d) => d.color);

      const simulation = d3
        .forceSimulation(nodes)
        .alphaTarget(0.3) // stay hot
        .velocityDecay(0.1) // low friction
        .force("x", d3.forceX(center[0]).strength(0.01))
        .force("y", d3.forceY(center[1]).strength(0.01))
        .force(
          "collide",
          d3
            .forceCollide()
            .radius((d) => d.r + 1)
            .iterations(3)
        )
        .force(
          "charge",
          d3.forceManyBody().strength((d, i) => (i ? 0 : -width / 3))
        )
        .on("tick", tick);

      simulation.restart();

      // once the arrangement is initialized, scale and translate it
      if (rescale) {
        for (const node of nodes) {
          node.x = node.x * scale + center[0];
          node.y = node.y * scale + center[1];
        }
      }

      svg.on("pointermove touchmove", pointed);
      svg.on("mouseout", exited);

      function pointed(event) {
        event.preventDefault();
        const [x, y] = d3.pointer(event);
        nodes[0].fx = x + 30;
        nodes[0].fy = y + 30;
      }

      function exited(event) {
        simulation.restart();
      }

      ///////////////////////////////////////////////////////////////////////////
      ///////////////////////////// Create filter ///////////////////////////////
      ///////////////////////////////////////////////////////////////////////////

      //SVG filter for the gooey effect
      //Code taken from http://tympanus.net/codrops/2015/03/10/creative-gooey-effects/
      var defs = svg.append("defs");
      var filter = defs.append("filter").attr("id", "gooeyCodeFilter");
      filter
        .append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", "10")
        //to fix safari: http://stackoverflow.com/questions/24295043/svg-gaussian-blur-in-safari-unexpectedly-lightens-image
        .attr("color-interpolation-filters", "sRGB")
        .attr("result", "blur");
      filter
        .append("feColorMatrix")
        .attr("in", "blur")
        .attr("mode", "matrix")
        .attr("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7");
      //     .attr("result", "gooey");
      //If you want the end shapes to be exactly the same size as without the filter
      //add the feComposite below. However this will result in a less beautiful gooey effect
      //   filter.append("feBlend").attr("in", "SourceGraphic").attr("in2", "gooey");
      //Instead of the feBlend, you can do feComposite. This will also place a sharp image on top
      //But it will result in smaller circles
      //   filter
      //     .append("feComposite") //feBlend
      //     .attr("in", "SourceGraphic")
      //     .attr("in2", "gooey")
      //     .attr("operator", "atop");

      ///////////////////////////////////////////////////////////////////////////
      ///////////////////////////// Create circles //////////////////////////////
      ///////////////////////////////////////////////////////////////////////////

      var circleWrapper = svg
        .append("g")
        .attr("class", "circleWrapper")
        .style("filter", "url(#gooeyCodeFilter)");

      circleWrapper
        .selectAll("circle")
        .data(nodes.slice(1))
        .enter()
        .append("circle")
        .attr("r", function (d) {
          return d.r;
        })
        .style("fill", "white");

      function tick() {
        svg
          .selectAll("circle")
          .attr("cx", function (d) {
            return d.x;
          })
          .attr("cy", function (d) {
            return d.y;
          });
      }
    },

    enterFn() {
      router.push({ name: "About" });
    },
  },

  mounted() {
    this.createGooey();
  },
});
</script>

<style scoped></style>
