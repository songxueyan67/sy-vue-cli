import { Form } from 'ant-design-vue';
const useForm = Form.useForm;

export default function useLoginForm() {
  const modelRef = reactive ({
    username: "",
    password: "",
    randomStr: "",
    imageCode: "",
  })
  const rulesRef = reactive({
    username: [
      {
        required: true,
        message: '请输入账号'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码'
      }
    ],
    imageCode: [
      {
        required: true,
        message: '请输入验证码'
      }
    ]
  })
  const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
  return {
    modelRef,
    validateInfos,
    resetFields,
    validate,
  }
}