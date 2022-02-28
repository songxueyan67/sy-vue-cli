<template>
  <div class="login">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="username" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username" />
      </a-form-item>
      <a-form-item label="password" v-bind="validateInfos.password">
        <a-input-password v-model:value="modelRef.password" />
      </a-form-item>
      <a-form-item label="imageCode" v-bind="validateInfos.imageCode">
        <a-input v-model:value="modelRef.imageCode" />
        <Captcha ref="captcha" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">Submit</a-button>
        <a-button style="margin-left: 10px" @click="resetFields()"
          >Reset</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { useAccountStore } from "@/store/account";
import useLoginForm from "./useLogin";
const { login } = useAccountStore();
const { modelRef, validateInfos, resetFields, validate } = useLoginForm();
const captcha = ref();
const onSubmit = () => {
  validate().then(() => {
    login({ ...modelRef, randomStr: captcha.value.randomStr });
  });
};
</script>