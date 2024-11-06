<script setup>
import BaseNode from "./BaseNode.vue";

defineProps(["data"]);
</script>

<template>
  <BaseNode
    icon="✉️"
    title="Message"
    :description="'Message: ' + (data.payload[0]?.text || 'Image Attachment')"
  />
</template>
