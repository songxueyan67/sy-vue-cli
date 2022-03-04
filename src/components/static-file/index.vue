<template>
  <img :src="VITE_BASE_STATIC_URL + props.src" />
</template>

<script lang='ts' setup>
const { VITE_BASE_STATIC_URL } = import.meta.env;
interface PropType {
  src: string;
}
const props = withDefaults(defineProps<PropType>(), {
  src: "",
});
</script>
<style scoped lang='scss'></style>