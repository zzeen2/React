import React from 'react'
import styled from "styled-components"
import Title from '../Atoms/Title'

const HeaderWrap = styled.ul`
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;
    gap : 24px;
    box-sizing: border-box;
    box-shadow: 0 0 22px -18px;
`

const Header = ({userInfo}) => {
  return (
    <HeaderWrap>
        <Title tag={true} path={"/"}>홈페이지</Title>
        <Title path={"/board"}>게시판</Title>
        <Title path={"/login"}>로그인</Title>
        <Title path={"/mypage"}>마이페이지</Title>
        <div>
            {userInfo.isLogin ? <span>아이디 : {userInfo.uid} 닉네임 : {userInfo.nick }</span> : ""}
        </div>
    </HeaderWrap>
  )
}

export default Header
