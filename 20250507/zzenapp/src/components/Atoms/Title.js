import React from 'react'
import {Link} from "react-router-dom"
import styled from "styled-components"
import { BrowserRouter } from 'react-router-dom'

const TitleStyle = styled.li`
    position: relative;
        list-style: none;
    & *{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    .title-link {
        color : #6e759f;
        font-size : 20px;
        line-height: 40px;
        text-decoration: none;
    }

    &.tag::before {
        background-color: #5569ff;
        content: "";
        width: 24px;
        border-radius: 4px;
        height: 4px;
        transform: translateY(50%);
        position: absolute;
        bottom :0;
        left:0;
    }
`

const Title = ({tag=false, children, path}) => {
    //console.log(props)
    return (
        <TitleStyle className={tag ? "tag" : ""}>
            <Link className='title-link' to={path}>
                {children}
            </Link>
        </TitleStyle>
    )
}

export default Title
