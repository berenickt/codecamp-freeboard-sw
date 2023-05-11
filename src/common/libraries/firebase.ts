// ******************* 파이어베이스 ****************************
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAo0h1t7PIZ2jxBiE-sZFmKrTrsIeAOunY',
  authDomain: 'codecamp-fe-sw.firebaseapp.com',
  projectId: 'codecamp-fe-sw',
  storageBucket: 'codecamp-fe-sw.appspot.com',
  messagingSenderId: '92136370515',
  appId: '1:92136370515:web:14e743ede1bc25784b71a6',
}

// Initialize Firebase, firebaseApp이 접속정보
export const firebaseApp = initializeApp(firebaseConfig)
// ******************* 파이어베이스 ****************************
// Firebase에 테스트 모드로 만들어서 30일 동안만 사용 가능. 23.03.29 ~ 23.04.29까지만
// 리전은 가까운 곳(seoul)에 만들기
