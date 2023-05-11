import styled from '@emotion/styled'

export const UploadImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 1.7rem;
  cursor: pointer;
`

export const UploadButton = styled.button`
  width: 10rem;
  height: 10rem;
  margin-right: 1.7rem;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.3s;
  &:hover {
    border-color: #1890ff;
  }
`

export const UploadFileHidden = styled.input`
  display: none;
`
