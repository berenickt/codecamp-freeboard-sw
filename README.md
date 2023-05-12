# 1. 기능 확인방법 (Getting Started)

터미널 창에서 다음 명령어를 순차적으로 입력해주세요.

```bash
$ git clone https://github.com/berenickt/codecamp-freeboard-sw.git
$ yarn install
$ yarn dev

# http://localhost:3000에 접속
```

> cf. (참고)
>
> PlayGround의 GraphQL API 들이 localhost:3000 주소에만 승인되도록 서버에 block 정책이 설정되어 있어서
> 현재 배포 주소의 GraphQL 데이터들은 읽지 못해 제대로 동작하지 않습니다. 
>
> https://codecamp-freeboard-sw.vercel.app/

------

# 2. 주요기능 및 라이브러리

## 2.1 주요기능

* 게시판 글 CRUD (create, Read, Update, Delete)
* 게시판 글 검색
* 게시판 댓글 CRUD
* 중고상품 CRUD
* 중고상품 질문답변 댓글 CRUD
* 아임포트(결제) 연동한 포인트 충전
* 마이페이지에서 자기가 등록한 중고상품, 구매한 중고상품, 찜등록한 중고상품 확인
* 마이페이지에서 결제 내역 확인
* 반응형 디자인 적용

------

## 2.2 주요 라이브러리

* react-daum-postcode : 다음주소 검색
* react-quill : 상품 입력
* react-infinite-scroller
* recoil : 전역상태 관리
* slick-carousel
* 아임포트 : 결제

------

# 3. 기능동작

## 3.1 게시글 조회

![게시글 조회](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/게시글-조회.gif)

------

## 3.2 게시글 수정

![게시글수정.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/게시글수정.gif)

------

## 3.3 게시물 댓글 CRUD

![게시글 댓글작성-수정.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/게시글-댓글작성-수정.gif)

------

## 3.4 로그인 페이지로 리다이렉트

![로그인페이지 리다이렉트.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/로그인페이지-리다이렉트.gif)

------

## 3.5 회원가입-로그인

![회원가입-로그인.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/회원가입-로그인.gif)

------

## 3.6 내가 등록한상품-구매한상품-찜등록한상품 조회

![등록한상품-구매한상품-찜등록한상품.gif ](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/등록한상품-구매한상품-찜등록한상품.gif)

------

## 3.7 선택한 금액만큼 포인트 충전 (결제)

![선택한금액만큼포인트충전.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/선택한금액만큼포인트충전.gif)

------

## 3.8 내가 결제한 내역들 조회

![전체결제내역-충전내역-구매내역-판매내역.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/전체결제내역-충전내역-구매내역-판매내역.gif)

------

## 3.9 중고상품 등록, 수정, 삭제

![이미지업로드-태그입력.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/이미지업로드-태그입력.gif)

* 이미지 업로드
* 태그 추가
* 주소 추가 가능

------

## 3.10 중고상품 질문답변 댓글 CRUD

![질문답변CRUD.gif](https://raw.githubusercontent.com/berenickt/codecamp-freeboard-sw/main/public/readme/질문답변CRUD.gif)
