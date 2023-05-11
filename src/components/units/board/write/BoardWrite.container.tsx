import { Modal } from 'antd'
import { Address } from 'react-daum-postcode'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { IBoardWriteProps, IUpdateBoardInput } from './BoardWrite.types'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from '@/common/types/generated/types'

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter()
  // ****
  const [isOpen, setIsOpen] = useState(false) // 주소 모달
  const [isActive, setIsActive] = useState(false) // 유효성 검사 표시 여부

  // **** 상태
  const [ID, setId] = useState('')
  const [password, setPassword] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postContnet, setPostContnet] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')

  // **** 유효성 검사
  const [idValidation, setIdValidation] = useState('')
  const [passwordValidation, setPasswordValidation] = useState('')
  const [postTitleValidation, setPostTitleValidation] = useState('')
  const [postContnetValidation, setPostContentValidation] = useState('')

  // **** 사진 첨부 버튼 배열 (사진첨부1)
  // 3개의 이미지 첨부 버튼이 화면에 노출되도록 하려면, map을 실행하는 배열의 길이가 일정하게 3이어야 합니다.
  // 그것을 위하여 fileUrls라는 state의 초기값에 `빈 문자열이 3개 들어가 있는 배열`을 넣었음
  const [fileUrls, setFileUrls] = useState(['', '', ''])

  // **** Playground 요청
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<Pick<IMutation, 'updateBoard'>, IMutationUpdateBoardArgs>(UPDATE_BOARD)

  // **** 값이 있다면, 유효성 검사 메시지 지우기
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
    if (event.target.value) setIdValidation('')
    if (event.target.value && password && postTitle && postContnet) setIsActive(true)
    else setIsActive(false)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    if (event.target.value) setPasswordValidation('')
    if (ID && event.target.value && postTitle && postContnet) setIsActive(true)
    else setIsActive(false)
  }
  const onChangePostTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value)
    if (event.target.value) setPostTitleValidation('')
    if (ID && password && event.target.value && postContnet) setIsActive(true)
    else setIsActive(false)
  }
  const onChangePostContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContnet(event.target.value)
    if (event.target.value) setPostContentValidation('')
    if (ID && password && postTitle && event.target.value) setIsActive(true)
    else setIsActive(false)
  }

  // **** 주소 모달
  const onToggleAddressModal = () => setIsOpen(prev => !prev)

  // **** 모달에서 검색한 주소를 동적으로 input value값에 넣어주기
  const onCompleteAddressSearch = (address: Address) => {
    setAddress(address.address)
    setZipcode(address.zonecode)
    setIsOpen(prev => !prev)
  }

  // **** 상세주소 입력
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value)
  }

  // **** 유튜브 검색
  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value)
  }

  // **** 게시글 이미지 업로드
  // 배열로 이루어진 fileUrls의 몇 번째 index를 교체할 것 인지를 매개변수로 받아오게 됩니다.
  // 파일 업로드 시 `FileUrls라는 state의 특정 index 값`이 `구글 스토리지에 올라간 이미지 파일의 url`로 바뀜
  // 그리고 변경 완료된 fileUrls를 useMutation 요청 시 함께 보내면 게시글 등록 시 첨부된 이미지의 url도 함께 DB에 저장됨
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    // 기존의 파일 URL을 갖고와서, 해당 위치의 index에 새롭게 받은 파일 URL로 교체
    const newFileUrls = [...fileUrls] // ['', '', '']
    newFileUrls[index] = fileUrl // ['', '', '강아지.jpg']
    setFileUrls(newFileUrls)
  }

  useEffect(() => {
    // **** 게시글 수정 시, 이미지 defaultValue으로 받아오는 법
    //  실제 받은 이미지가 있으면, 그 이미지들을
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images])
    }
  }, [props.data])

  // **** 게시글 작성
  const onClickSignup = async () => {
    // 각각 id, password, postTitle, postContent가 없다면,
    if (!ID) setIdValidation('아이디를 입력해주세요.')
    if (!password) setPasswordValidation('비밀번호를 입력해주세요')
    if (!postTitle) setPostTitleValidation('게시글 제목를 입력해주세요')
    if (!postContnet) setPostContentValidation('게시글 내용를 입력해주세요')
    // id, password, postTitle, postContent가 모두 있으면,
    if (ID && password && postTitle && postContnet) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: ID,
              password,
              title: postTitle,
              contents: postContnet,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              youtubeUrl,
              images: [...fileUrls],
            },
          },
        })

        // console.log('=====게시글 생성요청=======');
        // console.log(result.data);
        void router.push(`/boards/${result.data?.createBoard._id}`)
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message })
      }
    }
  }

  // **** 게시글 수정
  const onClickUpdate = async () => {
    // 배열을 문자열로 변경해 같은지 비교
    const currentFiles = JSON.stringify(fileUrls)
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images)
    const isChangedFiles = currentFiles !== defaultFiles

    if (!postTitle && !postContnet && !youtubeUrl && !address && !addressDetail && !zipcode && !isChangedFiles) {
      alert('수정한 내용이 없습니다.')
      return
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.')
      return
    }
    // 빈 객체를 생성 후, 필수값은 미리 넣어놓고, 그외 값들은 값이 있을 때만 백엔드에 전송
    const updateBoardInput: IUpdateBoardInput = {}

    // 값이 있다면, 해당 객체 속성을 추가
    if (postTitle) updateBoardInput.title = postTitle
    if (postContnet) updateBoardInput.contents = postContnet
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {}
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode
      if (address) updateBoardInput.boardAddress.address = address
      if (addressDetail) updateBoardInput.boardAddress.addressDetail = addressDetail
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.id),
          password,
          updateBoardInput,
        },
      })
      void router.push(`/boards/${result.data?.updateBoard._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  return (
    <BoardWriteUI
      isActive={isActive}
      idValidation={idValidation}
      passwordValidation={passwordValidation}
      postTitleValidation={postTitleValidation}
      postContnetValidation={postContnetValidation}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangePostTitle={onChangePostTitle}
      onChangePostContent={onChangePostContent}
      onToggleAddressModal={onToggleAddressModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFileUrls={onChangeFileUrls}
      onClickSignup={onClickSignup}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
    />
  )
}
