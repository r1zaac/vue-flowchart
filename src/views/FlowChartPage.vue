<template>
  <div class="flowchart-page">
    <VueFlow
      :nodes="nodes"
      :edges="edges"
      :node-types="nodeTypes"
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

import TriggerNode from "@/components/nodes/TriggerNode.vue";
import BusinessHoursNode from "@/components/nodes/BusinessHoursNode.vue";
import MessageNode from "@/components/nodes/MessageNode.vue";
import CommentNode from "@/components/nodes/CommentNode.vue";

import { initialNodes, initialEdges } from "../initial-elements.js";

const { onInit, onConnect, addEdges } = useVueFlow();

const nodes = ref(initialNodes);
const edges = ref(initialEdges);

const nodeTypes = {
  trigger: TriggerNode,
  businessHours: BusinessHoursNode,
  sendMessage: MessageNode,
  addComment: CommentNode,
};

onInit((vueFlowInstance) => {
  vueFlowInstance.fitView();
});

onConnect((connection) => {
  addEdges(connection);
});
</script>

<style scoped>
.flowchart-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
