import { css } from '@emotion/react'

export const GlobalStyle = css`
  @font-face {
    font-family: 'Happiness-Title';
    src: url('/fonts/Happiness-Sans-Title.woff2'); // public 폴더를 찾으려면 /를 하면 됨
  }

  :root {
    --main-color: #ff7e36;
    --main-color-green: #e6f3e7;
    --main-color-deep-green: #c3e8c3;
    --main-color-white-blue: #d2edfa;
    --main-color-white-yello: #fbf7f3;

    --color-black: #181818;
    --color-white: #ffffff;
    --color-gray: #f8f9fa;
    --color-gray-100: #f3f3f3;
    --color-gray-200: #e7e7e7;
    --color-gray-300: #dcdcdc;
    --color-gray-400: #d0d0d0;
    --color-gray-500: #c4c4c4;
    --color-gray-600: #aaa9a9;
    --color-gray-700: #767676;
    --color-gray-800: #4e4e4e;
    --color-gray-900: #272727;
    --color-blue-100: #cceafa;
    --color-blue-200: #65cde3;
    --color-blue-300: #61bfe6;
    --color-blue-400: #33abe9;
    --color-blue-500: #0096e4;
    --color-blue-600: #0074e9;
    --color-blue-700: #005a89;
    --color-blue-800: #003c5b;
    --color-blue-900: #001e2e;
    --color-opacity-20: rgba(0, 0, 0, 0.2);
    --color-red-100: #fad3d6;
    --color-red-200: #f5a7ac;
    --color-red-300: #ef7b83;
    --color-red-400: #ea4f59;
    --color-red-500: #e52330;
    --color-red-600: #990f18;
    --color-red-700: #89151d;
    --color-red-800: #5c0e13;
    --color-red-900: #2e070a;
    --color-yellow-100: #fef2d9;
    --color-yellow-200: #fde4b4;
    --color-yellow-300: #fdd78e;
    --color-yellow-400: #fcc969;
    --color-yellow-500: #fbbc43;
    --color-yellow-600: #ff9b05;
    --color-yellow-700: #977128;
    --color-yellow-800: #644b1b;
    --color-yellow-900: #32260d;
    --color-green-100: #f4f5d2;
    --color-green-200: #e9eba5;
    --color-green-300: #dde177;
    --color-green-400: #d2d74a;
    --color-green-500: #c7cd1d;
    --color-green-600: #9fa417;
    --color-green-700: #00b599;
    --color-green-800: #50520c;
    --color-green-900: #282906;
    --color-brown-100: #dfd5d4;
    --color-brown-200: #bfaba9;
    --color-brown-300: #9d7a6d;
    --color-brown-400: #7e5852;
    --color-brown-500: #5e2e27;
    --color-brown-600: #4b251f;
    --color-brown-700: #381c17;
    --color-brown-800: #261210;
    --color-brown-900: #130908;
    --color-purple-100: #dfd8f2;
    --color-purple-200: #beb0e6;
    --color-purple-300: #9e89d9;
    --color-purple-400: #7d61cd;
    --color-purple-500: #5d3ac0;
    --color-purple-600: #4a2e9a;
    --color-purple-700: #382373;
    --color-purple-800: #25174d;
    --color-purple-900: #130c26;

    --color-insta-gradient: linear-gradient(
      174.12deg,
      #2856eb 5.61%,
      #bc1888 22.32%,
      #cc2366 36.16%,
      #dc2743 51.91%,
      #e6683c 73.38%,
      #f09433 91.99%
    );

    --base-size: 10px;
    --font-family: 'Noto Sans KR', sans-serif;
  }

  /* prettier-ignore */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, 
  acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, 
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, 
  tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, 
  footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, input, textarea, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  html {
    font-size: var(--base-size);
    font-family: var(--font-family);
  }

  body {
    color: var(--color-black);
    background: var(--color-white);
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    outline: none;
    color: inherit;
    &:active,
    &:hover {
      text-decoration: none;
      color: inherit;
      outline: 0;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: inherit;
    font: inherit;
    color: inherit;
  }

  input {
    outline: none;
  }
`
