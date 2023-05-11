import styled from '@emotion/styled'
import { gql, useMutation } from '@apollo/client'
import { ChangeEvent, useRef } from 'react'
import { Modal } from 'antd'
import { checkValidationImage } from './Uploads02.validation'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const UploadDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: #bdbdbd;
  cursor: pointer;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`

const Image = styled.img`
  width: 12vw;
  margin-right: 15px;
`

interface IUploadFIlePage {
  fileUrl: string
  onChangeFileUrls: (fileUrl: any, index: number) => void
  images?: any
  index: number
}

export default function UploadFilePage(props: IUploadFIlePage) {
  const [uploadFile] = useMutation(UPLOAD_FILE)
  const fileRef = useRef<HTMLInputElement>(null)

  const onClickUpload = () => {
    fileRef.current?.click()
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)

    const isValid = checkValidationImage(file)
    if (!isValid) return

    try {
      const result = await uploadFile({ variables: { file } })
      props.onChangeFileUrls(result.data.uploadFile.url, props.index)
    } catch (error: any) {
      Modal.error({ content: error.message })
    }
  }

  return (
    <Wrapper>
      {props.fileUrl ? (
        <Image onClick={onClickUpload} src={`https://storage.googleapis.com/${props.fileUrl}`} />
      ) : (
        <UploadDiv onClick={onClickUpload}>
          <span>image</span>
        </UploadDiv>
      )}
      <div style={{ display: 'none' }}>
        <input onChange={onChangeFile} type="file" ref={fileRef} />
      </div>
    </Wrapper>
  )
}
