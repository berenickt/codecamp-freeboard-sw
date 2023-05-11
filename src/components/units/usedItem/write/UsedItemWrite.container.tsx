import { Modal } from 'antd'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { Address } from 'react-daum-postcode'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from './UsedItemWrite.queries'
import { IFormValues, IUsedItemWriteProps } from './UsedItemWrite.types'
import UsedItemWriteUI from './UsedItemWrite.presenter'
import { schema } from './UsedItemWrite.vaildation'
import { IUpdateUseditemInput } from '@/common/types/generated/types'

export default function UsedItemWrite(props: IUsedItemWriteProps) {
  const router = useRouter()
  const useditemId = String(router.query.useditemId)

  // **** 상태
  const [hashArr, setHashArr] = useState<string[]>([])
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [images, setImages] = useState(['', '', ''])
  const [isOpen, setIsOpen] = useState(false)

  // **** PlayGround
  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM)

  // **** useForm
  const { register, handleSubmit, setValue, trigger, getValues, formState, reset } = useForm({
    resolver: yupResolver(schema), // 어떤 yup을 연결시킬 것인지
    mode: 'onChange',
  })

  // **** useForm에 ReactQuill의 content 연결
  const onChangeContents = (value: string) => {
    setValue('contents', value === '<p><br></p>' ? '' : value) // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    void trigger('contents') // onChan 됐다고 react-hook-form에 알려주는 기능!
  }

  // **** 상품 등록
  const onClickSubmit = async (data: IFormValues) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            ...data,
            tags: hashArr,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images,
          },
        },
      })
      console.log(result)
      Modal.success({ content: '상품등록이 완료되었습니다!' })
      void router.push(`/useditem/${result.data?.createUseditem._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 상품 수정
  const onClickUpdate = async (data: any) => {
    // 배열을 문자열로 변경해 같은지 비교
    const currentFile = JSON.stringify(images)
    const defaultFile = JSON.stringify(props.data?.fetchUseditem.images)
    const isChangeFile = currentFile !== defaultFile

    try {
      // 빈 객체를 생성 후, 필수값은 미리 넣어놓고, 그외 값들은 값이 있을 때만 백엔드에 전송
      const updateUseditemInput: IUpdateUseditemInput = {}

      // 값이 있다면, 해당 객체 속성을 추가
      if (data.name) updateUseditemInput.name = data.name
      if (data.remarks) updateUseditemInput.remarks = data.remarks
      if (data.contents) updateUseditemInput.contents = data.contents
      if (data.price) updateUseditemInput.price = data.price
      if (data.tags) updateUseditemInput.tags = data.tags
      if (zipcode || address || addressDetail) {
        updateUseditemInput.useditemAddress = {}
        if (zipcode) updateUseditemInput.useditemAddress.zipcode = zipcode
        if (address) updateUseditemInput.useditemAddress.address = address
        if (addressDetail) updateUseditemInput.useditemAddress.addressDetail = addressDetail
      }
      if (isChangeFile) updateUseditemInput.images = images

      const result = await updateUseditem({
        variables: {
          useditemId,
          updateUseditemInput,
          useditemAddress: {
            zipcode,
            address,
            addressDetail,
          },
        },
      })
      console.log(result)
      Modal.success({ content: '상품 수정이 완료되었습니다.' })
      void router.push(`/useditem/${result.data?.updateUseditem._id}`)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message })
    }
  }

  // **** 해시태그
  const onKeyUpHash = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== '') {
      setHashArr([...hashArr, '#' + event.target.value])
      event.target.value = ''
    }
  }

  // **** 해시태그 삭제
  const onClickTagDelete = (event: any) => {
    hashArr.splice(Number(event.target.id), 1)
    setHashArr([...hashArr])
  }

  // **** 주소 모달
  const showModal = () => setIsOpen(prev => !prev)
  const handleOk = () => setIsOpen(false)
  const handleCancel = () => setIsOpen(false)

  // ** 모달에서 검색한 주소를 동적으로 input value값에 넣어주기
  const handleComplete = (address: Address) => {
    setZipcode(address.zonecode)
    setAddress(address.address)
    setIsOpen(prev => !prev)
  }

  // ** 상세주소 입력
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => setAddressDetail(event.target.value)

  // **** 이미지 업로드 : 기존의 파일 URL을 갖고와서, 해당 위치의 index에 새롭게 받은 파일 URL로 교체
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileURLs = [...images] // ['', '', '']
    newFileURLs[index] = fileUrl // ['', '', '강아지.jpg']
    setImages(newFileURLs)
  }

  // **** 이미지 수정하기
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setImages([...props.data?.fetchUseditem.images])
    }
    reset({ contents: props.data?.fetchUseditem.contents })
  }, [props.data])

  // **** 태그 수정하기
  useEffect(() => {
    if (props.data?.fetchUseditem?.tags?.length) {
      setHashArr([...props.data?.fetchUseditem?.tags])
    }
  }, [props.data])

  return (
    <UsedItemWriteUI
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      onClickSubmit={onClickSubmit}
      onChangeFileUrls={onChangeFileUrls}
      onChangeContents={onChangeContents}
      onChangeAddressDetail={onChangeAddressDetail}
      data={props.data}
      images={images}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      getValues={getValues}
      onKeyUpHash={onKeyUpHash}
      onClickTagDelete={onClickTagDelete}
      hashArr={hashArr}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      showModal={showModal}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  )
}
