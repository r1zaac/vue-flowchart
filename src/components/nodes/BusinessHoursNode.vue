<template>
  <div class="node business-hours-node">
    <div class="icon">🕒</div>
    <div class="title">{{ data.label }}</div>
    <div class="description">Business Hours - {{ data.timezone }}</div>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped>
.business-hours-node {
  /* Style for Business Hours node */
}
</style>
