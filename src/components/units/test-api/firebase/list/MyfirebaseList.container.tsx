import { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs, DocumentData } from 'firebase/firestore/lite'
import { useRouter } from 'next/router'

import { firebaseApp } from '@/common/libraries/firebase'
import MyfirebaseListUI from './MyfirebaseList.presenter'

export default function MyfirebaseList() {
  const router = useRouter()
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([])

  useEffect(() => {
    const fetchBoards = async () => {
      const board = collection(getFirestore(firebaseApp), 'board')
      const result = await getDocs(board)
      const boards = result.docs.map(element => element.data())
      setDataBoards(boards)
    }
    void fetchBoards()
  }, [])

  const onClickMoveToBoardNew = () => router.push('/myfirebase/new')

  return <MyfirebaseListUI dataBoards={dataBoards} onClickMoveToBoardNew={onClickMoveToBoardNew} />
}
