<template>
  <div class="home">
    <a-form>
      <a-form-item label="username" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username" />
      </a-form-item>
      <a-form-item label="password" v-bind="validateInfos.password">
        <a-input-password v-model:value="modelRef.password" />
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
import useFormHooks from "@/hooks/useForm";
import { modelRef, rulesRef } from "./from";
const { resetFields, validateInfos, validate } = useFormHooks(
  modelRef,
  rulesRef
);

const onSubmit = () => {
  validate().then((res) => {
    console.log(res);
  });
};
</script>