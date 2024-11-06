<script setup>
import BaseNode from "./BaseNode.vue";
</script>

<template>
  <BaseNode
    icon="📅"
    title="Business Hours"
    description="Business Hours - UTC"
    :class="{ 'custom-business-node': true }"
  />
</template>

<style scoped>
.custom-business-node {
  border: 2px solid #ff6b6b; /* Custom border color */
  background-color: #fff0f0; /* Light background color */
  padding: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  text-align: center;
}

.custom-business-node .icon {
  color: #ff6b6b; /* Match icon color to border */
  font-size: 24px;
  margin-bottom: 5px;
}

.custom-business-node .title {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 4px;
}

.custom-business-node .description {
  color: #666;
  font-size: 0.9em;
}
</style>
