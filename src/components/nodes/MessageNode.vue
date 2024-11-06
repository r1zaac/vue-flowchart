<template>
  <BaseNode icon="✉️" title="Message" :description="messageDescription" />
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
import BaseNode from "./BaseNode.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const messageDescription = computed(() => {
  const payload = props.data?.payload;
  if (payload && payload[0]) {
    return `Message: ${
      payload[0].text || payload[0].attachment || "No content"
    }`;
  }
  return "Message: No content";
});
</script>
