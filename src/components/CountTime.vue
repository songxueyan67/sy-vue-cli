<template>
  <a-button :disabled="disabled" @click="send">{{
    disabled ? countDown + "秒" : "发送验证码"
  }}</a-button>
</template>

<script lang='ts' setup>
import { count } from "console";

interface PropType {
  count: number;
}
const disabled = ref(false);
let countDown = ref();
const prop = withDefaults(defineProps<PropType>(), {
  count: 59,
});
countDown.value = prop.count;
const emit = defineEmits(["sendMessage"]);

const send = () => {
  emit("sendMessage");
  disabled.value = true;
  const timer = setInterval(() => {
    if (countDown.value > 1) {
      countDown.value -= 1;
    } else {
      clearInterval(timer);
      disabled.value = false;
    }
  }, 1000);
};
</script>
