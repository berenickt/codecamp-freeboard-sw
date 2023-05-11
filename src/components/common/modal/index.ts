import { Modal } from 'antd'

export function SuccessModal(SuccessMessge: String) {
  Modal.success({
    content: SuccessMessge,
  })
}

export function ErrorModal(ErrorMessage: String) {
  Modal.error({
    content: ErrorMessage,
  })
}
