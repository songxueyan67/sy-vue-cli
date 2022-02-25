<template>
  <img class="captch-img" :src="codeImage" @click="handleCaptch" />
</template>

<script lang='ts' setup>
import { Type } from "@/api/captcha";
import getCaptch from "@/api/captcha";
const codeImage = ref("");
const randomStr = ref("");

// 切换图形验证码
const handleCaptch = () => {
  getCaptch().then(({ data }) => {
    codeImage.value = data.code;
    randomStr.value = data.randomStr;
  });
};

onMounted(() => {
  handleCaptch();
});

defineExpose({ randomStr, handleCaptch });
</script>
<style scoped lang='scss'>
.captch-img {
  cursor: pointer;
}
</style>