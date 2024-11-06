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

      <Panel position="top-right">
        <button
          class="panel-button"
          @click="
            showCreateNodeModal = true;
            console.log(showCreateNodeModal);
          "
        >
          Create New Node
        </button>
      </Panel>
    </VueFlow>

    <!-- Modal for Creating New Node -->
    <div v-show="showCreateNodeModal" class="modal">
      <div class="modal-content">
        <h2>Create New Node</h2>
        <form @submit.prevent="addNode">
          <label>
            Title:
            <input v-model="newNodeData.title" type="text" required />
          </label>
          <label>
            Description:
            <input v-model="newNodeData.description" type="text" />
          </label>
          <label>
            Type of Node:
            <select v-model="newNodeData.type" required>
              <option value="sendMessage">Send Message</option>
              <option value="addComment">Add Comment</option>
              <option value="businessHours">Business Hours</option>
            </select>
          </label>
          <button type="submit">Add Node</button>
          <button type="button" @click="showCreateNodeModal = false">
            Cancel
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flowchart-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative; /* Ensure elements inside can position themselves */
}

.panel-button {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100; /* Ensure it appears above other elements */
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.panel-button:hover {
  background-color: #0056b3;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-content h2 {
  margin-top: 0;
}

.modal-content form {
  display: flex;
  flex-direction: column;
}

.modal-content label {
  margin: 5px 0;
}
</style>
