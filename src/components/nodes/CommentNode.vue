<script setup>
import BaseNode from "../BaseNode.vue";

defineProps(["data"]);
</script>

<template>
  <BaseNode icon="💬" title="Add Comment" :description="data.comment" />
</template>
