import React from 'react'
import styled from "styled-components";
import loadingImg from "../../images/loading.gif"

const LoadingWrap = styled.div`
    img {
        width: 200px;
        position : absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }

    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`

const Loading = () => {
  return (
    <LoadingWrap>
      <img src={loadingImg} alt ="loading"></img>
    </LoadingWrap>
  )
}

export default Loading
