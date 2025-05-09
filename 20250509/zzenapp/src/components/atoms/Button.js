import React, { children } from 'react'
import styled from "styled-components";

const ButtonWrapStyle = styled.div`
    padding : 14px 25px;
    box-sizing : border-box;
    border-radius: 10px;
    border : 1px solid;
    display: inline-block;
`


const Button = ({children, onClick}) => {
    return (
        <ButtonWrapStyle onClick={onClick}>
            {children}
        </ButtonWrapStyle>
    )
}

export default Button
