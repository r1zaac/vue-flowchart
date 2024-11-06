<template>
  <div class="flowchart-page">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :class="{ dark }"
      class="basic-flow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
    >
      <Background pattern-color="#aaa" :gap="16" />
      <MiniMap />
    </VueFlow>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { MiniMap } from "@vue-flow/minimap";
import { initialNodes, initialEdges } from "../initial-elements.js";

const { onInit, onConnect, addEdges } = useVueFlow();

const nodes = ref(initialNodes);
const edges = ref(initialEdges);

onInit((vueFlowInstance) => {
  vueFlowInstance.fitView();
});

onConnect((connection) => {
  addEdges(connection);
});
</script>

<style scoped>
.flowchart-page {
  height: 100vh; /* Full-page height */
  width: 100vw; /* Full-page width */
  overflow: hidden; /* Hide any overflow */
  display: flex;
  align-items: center;
  justify-content: center;
}

.basic-flow {
  height: 100%;
  width: 100%;
}
</style>
