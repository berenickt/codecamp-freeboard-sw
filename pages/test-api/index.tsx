import { Rate } from 'antd'
import { useState } from 'react'

export default function Star() {
  const [value, setValue] = useState(3)

  function handleChange(value: number) {
    setValue(value)
  }

  return <Rate onChange={handleChange} value={value} />
}
