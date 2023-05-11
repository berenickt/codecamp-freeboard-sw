import * as S from './Uploads01.styles'
import { IUploads01UIProps } from './Uploads01.types'

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {/* (사진첨부3) */}
      {/* fileUrl이 있으면 ? state에 들어가는 이미지를 보여주기 : 업로드 버튼 보여주기  */}
      {props.fileUrl ? (
        <S.UploadImage onClick={props.onClickUpload} src={`https://storage.googleapis.com/${props.fileUrl}`} />
      ) : (
        <S.UploadButton onClick={props.onClickUpload}>
          <>Upload</>
        </S.UploadButton>
      )}
      {/* 파일 업로드 기능을 가지고 있는 `file 타입의 input 태그`는 디자인 커스텀이 불가능 */}
      {/* 그래서 파일 첨부를 실행할 file input을 만든 뒤, 'display: none` 스타일을 지정해서 숨기기 */}
      {/* useRef를 이용해서, 따로 만든 파일 업로드 버튼 요소와 file input을 연결 */}
      <S.UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  )
}
