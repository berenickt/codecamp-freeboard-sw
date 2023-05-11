import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'

import Uploads01UI from './Uploads01.presenter'
import { checkValidationImage } from './Uploads01.validation'
import { IUploads01Props } from './Uploads01.types'
import { UPLOAD_FILE } from './Uploads01.queries'

export default function Uploads01(props: IUploads01Props) {
  // **** cf. useRef (참조, Reference) : 태그를 담을 수 있다
  // useRef를 이용해서, 따로 만든 파일 업로드 버튼 요소와 file input을 연결
  const fileRef = useRef<HTMLInputElement>(null)

  // **** PlayGround
  const [uploadFile] = useMutation(UPLOAD_FILE)

  // onClickUpload를 실행하면 fileRef가 click 된다
  const onClickUpload = () => fileRef.current?.click()

  // **** 파일 업로드
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    // 유효성 검증 후, 유효성검증을 통과(true)가 되면, 조건문으로 false로 바꿔 계속 아래로 진행
    const file = checkValidationImage(event.target.files?.[0])
    if (!file) return

    // console.log(file);

    try {
      // 첨부된 파일을 구글 스토리지에 업로드 후 url를 반환받는다.
      const result = await uploadFile({ variables: { file } })

      console.log('=====백엔드에서 받아온 사진 URL====')
      console.log(result.data?.uploadFile.url)

      // BoardWrite에서 props로 받아온 onChangeFileUrls 함수에 스토리지에 업로드가 완료된 file의 url을 넘겨준다.
      props.onChangeFileUrls(result.data.uploadFile.url, props.index)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  )
}
