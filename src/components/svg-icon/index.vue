<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup lang="ts">
interface Prop {
  prefix: string;
  name: string;
  color: string;
}
const props = withDefaults(defineProps<Prop>(), {
  prefix: "icon",
  color: "#333",
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>