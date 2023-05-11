import { ChangeEvent, useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore/lite'

import MyfirebaseWriteUI from './MyfirebaseWrite.presenter'
import { useRouter } from 'next/router'
import { firebaseApp } from '@/common/libraries/firebase'

export default function MyfirebaseWrite() {
  // **** 상태값
  const router = useRouter()
  const [writer, setWriter] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  // **** 게시글 작성
  const onClickSubmit = async () => {
    const board = collection(getFirestore(firebaseApp), 'board')
    await addDoc(board, { writer, title, contents })
    alert('게시물 등록에 성공하였습니다!')
    void router.push('/myfirebase')
  }

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => setWriter(event.target.value)
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => setContents(event.target.value)

  const onClickMoveToList = () => router.push(`/myfirebase`)

  return (
    <MyfirebaseWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickMoveToList={onClickMoveToList}
    />
  )
}
