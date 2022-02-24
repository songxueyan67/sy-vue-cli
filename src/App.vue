<template>  
  <div>
    111
    <img :src="imgSrc">
    <a-button>3233</a-button>
  </div>
</template>
<script setup lang="ts">
import getCaptcha from '@/api/captcha'
import { ref } from 'vue'
const imgSrc = ref("");
getCaptcha().then((res) => {
  console.log(res);
})
</script>
<style>
</style>
