import React from 'react'
import LogoHeader from '../molecules/layout/LogoHeader'
import styled from "styled-components"
import CheckBox from '../atoms/checkBox/CheckBox'
import LoginWrap from '../templates/LoginWrap'

const Wrap = styled.div`
background-color:#F9FAFC;
min-height: 100vh;
`

const LoginPage = () => {
    return (
        <Wrap>
        <LogoHeader/>
        <LoginWrap/>
        </Wrap>
    )
}

export default LoginPage
