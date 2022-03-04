<template>
  <div>
    {{ data }}
  </div>
</template>

<script lang='ts' setup>
import { getUserList } from "@/api/user";
let data = ref([]);
getUserList().then((res) => {
  data.value = res;
});
</script>
<style scoped lang='scss'></style>