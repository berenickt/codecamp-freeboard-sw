import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('필수 입력 사항입니다.'),
  remarks: yup.string().required('필수 입력 사항입니다.'),
  contents: yup.string().required('필수 입력 사항입니다.'),
  price: yup
    .number()
    .positive('양수만 입력 가능합니다.')
    .required('필수 입력 사항입니다.')
    .typeError('숫자만 입력 가능합니다.'),
})
