<template>
  <img class="captch-img" :src="codeImage" @click="handleCaptch" />
</template>

<script lang='ts' setup>
import getCaptch from "@/api/captcha";
const codeImage = ref("");
const randomStr = ref("");

// 切换验证码
const handleCaptch = () => {
  getCaptch().then((res) => {
    codeImage.value = res.data.code;
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