<template>
  <div class="node-wrapper">
    <div class="icon">⚡</div>
    <div class="content">
      <div class="title">{{ data.label }}</div>
      <div class="description">{{ data.description || data.type }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

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
  max-width: 200px; /* Limit width for consistent node sizes */
  text-align: center;
}

.icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.content {
  width: 100%;
}

.title {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 4px;
}

.description {
  color: gray;
  font-size: 0.9em;
  white-space: pre-wrap; /* Wrap text if it's too long */
}
</style>
