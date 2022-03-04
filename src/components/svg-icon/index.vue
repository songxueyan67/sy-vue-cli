<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="prop.color" />
  </svg>
</template>

<script setup lang="ts">
interface PropType {
  prefix: string;
  name: string;
  color: string;
}
const prop = withDefaults(defineProps<PropType>(), {
  prefix: "icon",
  name: "",
  color: "#333",
});
const symbolId = computed(() => `#${prop.prefix}-${prop.name}`);
</script>