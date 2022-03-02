import { Form } from 'ant-design-vue';
const useForm = Form.useForm;

export default function useFormHooks(modelRef: Object, rulesRef: Object) {
  const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)
  return {
    validate,
    resetFields,
    validateInfos,
  }
}