<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: { type: String, default: "🔲" },
  title: { type: String, required: true },
  description: { type: String, default: "" },
});
</script>

<template>
  <div class="node-wrapper">
    <div class="icon">{{ icon }}</div>
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  text-align: center;
}

.icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.title {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 4px;
}

.description {
  color: gray;
  font-size: 0.9em;
  white-space: pre-wrap;
}
</style>
