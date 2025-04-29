import React from 'react'
import styled from "styled-components"
import logo from "../../../images/logo.png"

const Wrap = styled.div`
    background-color : #11192A;
    width : 100%;
    height : 80px;
    display :flex;
    justify-content : center;
    align-items : center;
    position: relative;

    /* 자식 요소중에 클래스 logo-img */
    .logo-img {
    }
    /*자식 요소중에 img 태그 */
    img{
    }

    /* 컴포넌트에서 반환하는 요소를 선택자로 호출할때 (가상요소를 추가하거나 등등 )*/
    // 이미지 웹은 원본 사즈 혹은 2배의 크기 이미지를 달라고 요청
    // 모바일 원본 이미지 사이즈가 3배  

    &::before{
      content : "";
      background-image: url(${logo});
      display: block;
      position: absolute;
      top : 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 232px;
      height: 30px;
      background-size: 240px;

    }

`

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #F9FAFC;
  color : #333;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 40px;
  font-size: 24px;
  box-shadow: 0 3px 8px rgba(102, 102, 102, 0.1);
  font-weight: 700;
`
const LogoHeader = () => {
  return (
    <>
        <Wrap></Wrap>
        <Content>로그인 이후 이용해 주세요.</Content>
    </>
  )
}

export default LogoHeader
