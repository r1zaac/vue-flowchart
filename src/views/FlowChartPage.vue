<script setup>
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { MiniMap } from "@vue-flow/minimap";
import { initialNodes, initialEdges } from "../initial-elements.js";
import TriggerNode from "@/components/nodes/TriggerNode.vue";
import BusinessHoursNode from "@/components/nodes/BusinessHoursNode.vue";
import MessageNode from "@/components/nodes/MessageNode.vue";
import CommentNode from "@/components/nodes/CommentNode.vue";

const nodes = ref([...initialNodes]);
const edges = ref([...initialEdges]);

const showCreateNodeModal = ref(false);

const newNodeData = ref({
  title: "",
  description: "",
  type: "sendMessage",
});

const nodeTypes = {
  trigger: TriggerNode,
  businessHours: BusinessHoursNode,
  sendMessage: MessageNode,
  addComment: CommentNode,
};

function addNode() {
  const id = Date.now().toString();
  const position = { x: Math.random() * 400, y: Math.random() * 400 };

  nodes.value.push({
    id,
    type: newNodeData.value.type,
    position,
    data: {
      label: newNodeData.value.title,
      description: newNodeData.value.description,
    },
  });

  // Reset the form data and close the modal
  newNodeData.value = { title: "", description: "", type: "sendMessage" };
  showCreateNodeModal.value = false;
}
</script>

<template>
  <div class="flowchart-page">
    <VueFlow :nodes="nodes" :edges="edges" :node-types="nodeTypes">
      <Background pattern-color="#aaa" :gap="16" />
      <MiniMap />

      <div class="panel-button-container">
        <button class="button is-primary" @click="showCreateNodeModal = true">
          Create New Node
        </button>
      </div>
    </VueFlow>

    <!-- Modal for Creating New Node with Bulma styling -->
    <div class="modal" :class="{ 'is-active': showCreateNodeModal }">
      <div class="modal-background" @click="showCreateNodeModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create New Node</p>
          <button
            class="delete"
            @click="showCreateNodeModal = false"
            aria-label="close"
          ></button>
        </header>
        <section class="modal-card-body">
          <form @submit.prevent="addNode">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  class="input"
                  v-model="newNodeData.title"
                  type="text"
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input
                  class="input"
                  v-model="newNodeData.description"
                  type="text"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Type of Node</label>
              <div class="control">
                <div class="select">
                  <select v-model="newNodeData.type" required>
                    <option value="sendMessage">Send Message</option>
                    <option value="addComment">Add Comment</option>
                    <option value="businessHours">Business Hours</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addNode">Add Node</button>
          <button class="button" @click="showCreateNodeModal = false">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flowchart-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.panel-button-container {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
}

.modal-card {
  width: 90%;
  max-width: 500px;
}
</style>
