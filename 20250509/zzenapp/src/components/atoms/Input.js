import React from 'react'
import styled from "styled-components";

const InputStyled = styled.input`
    padding: 3px 6px;

`
const Input = (inputProps) => {
  return (
    <InputStyled {...inputProps}/>
  )
}

export default Input
