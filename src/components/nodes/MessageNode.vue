<template>
  <div class="node message-node">
    <div class="icon">✉️</div>
    <div class="title">{{ data.label }}</div>
    <div class="description">
      Message: {{ data.payload[0]?.text || data.payload[0]?.attachment }}
    </div>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped>
.message-node {
  /* Style for Message node */
}
</style>
