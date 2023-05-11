import axios from 'axios'
import { useEffect, useState } from 'react'

import OpenapiListUI from './OpenapiList.presenter'

export default function OpenapiList() {
  const [imgURLs, setImgUrls] = useState<string[]>([])

  // 의존성 배열[]에 아무것도 넣지 않으면 Mount시에만 렌더해주고 끝 (1번만 실행)
  useEffect(() => {
    const getImg = async () => {
      new Array(9).fill(1).forEach(async _ => {
        const result = await axios.get('https://dog.ceo/api/breeds/image/random')
        setImgUrls(prev => [...prev, result.data?.message])
      })
    }
    void getImg()
  }, [])

  return <OpenapiListUI imgURLs={imgURLs} />
}
