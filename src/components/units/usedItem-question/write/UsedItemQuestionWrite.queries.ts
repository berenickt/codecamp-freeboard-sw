import { gql } from '@apollo/client'

// 중고상품 질문 댓글 조회
export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      createdAt
      user {
        _id
        email
        name
        picture
        createdAt
      }
    }
  }
`

// 중고상품 질문 댓글 작성
export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion($createUseditemQuestionInput: CreateUseditemQuestionInput!, $useditemId: ID!) {
    createUseditemQuestion(createUseditemQuestionInput: $createUseditemQuestionInput, useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        email
        name
        picture
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`

// 중고상품 질문 댓글 수정
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
      user {
        _id
        email
        name
        picture
        createdAt
      }
    }
  }
`
