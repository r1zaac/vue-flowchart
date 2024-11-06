<template>
  <div class="node comment-node">
    <div class="icon">💬</div>
    <div class="title">{{ data.label }}</div>
    <div class="description">{{ data.comment }}</div>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped>
.comment-node {
  /* Style for Comment node */
}
</style>
