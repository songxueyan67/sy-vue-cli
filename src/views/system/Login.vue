<template>
  <div class="login">
    <a-form>
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
import useAccountStore from "@/store/account";
import useFormHooks from "@/hooks/useForm";
import { modelRef, rulesRef } from "./useLogin";
const { login } = useAccountStore();
const { validateInfos, resetFields, validate } = useFormHooks(
  modelRef,
  rulesRef
);
const captcha = ref();
const onSubmit = () => {
  validate().then(() => {
    login({ ...modelRef, randomStr: captcha.value.randomStr });
  });
};
</script>