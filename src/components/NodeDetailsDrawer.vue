<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { initialNodes, initialEdges } from "../initial-elements.js";

const route = useRoute();
const router = useRouter();

const isVisible = ref(false);
const nodeData = ref({});
const nodeType = ref("");

// Opens the drawer with the given data
function openDrawer(data) {
  nodeData.value = data;
  nodeType.value = data.type;
  isVisible.value = true;
}

// Closes the drawer
function closeDrawer() {
  isVisible.value = false;
  router.push("/"); // Navigate back to the main page
}

// Delete node functionality
function deleteNode() {
  isVisible.value = false;
  router.push("/");
}

// Watch for changes to the route parameter `id`
watch(
  () => route.params.id,
  async (nodeId) => {
    console.log("Route ID:", nodeId); // Debugging line
    if (nodeId) {
      const node = await fetchNodeData(nodeId); // Fetch node data based on ID
      if (node) {
        openDrawer(node);
      }
    } else {
      closeDrawer();
    }
  }
);

// Function to fetch node data based on ID
async function fetchNodeData(id) {
  const foundNode = initialNodes.find((node) => node.id === id); // Adjust as necessary
  return (
    foundNode || {
      id,
      title: "Sample Node",
      description: "This is a description of the node.",
      type: "sendMessage",
    }
  );
}
</script>

<template>
  <div v-if="isVisible" class="drawer">
    <div class="drawer-content">
      <button @click="closeDrawer">Close</button>
      <h2>{{ nodeData.title }}</h2>
      <p>{{ nodeData.description }}</p>

      <!-- Conditional Rendering for Node Details -->
      <div v-if="nodeType === 'sendMessage'">
        <p>Attachments and texts related to the message node</p>
      </div>
      <div v-if="nodeType === 'addComment'">
        <p>Comments and text for the comment node</p>
      </div>
      <div v-if="nodeType === 'businessHours'">
        <p>Business hours details with date/time picker</p>
      </div>

      <button @click="deleteNode">Delete Node</button>
    </div>
  </div>
</template>

<style scoped>
.drawer {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  padding: 20px;
}
</style>
