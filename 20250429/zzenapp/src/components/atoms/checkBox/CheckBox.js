import React from "react";
import styled from "styled-components";
import { useId } from "react";

const CheckBoxWrap = styled.div`
    input {
        display: none;

        &:checked + label {
            background-color: #5569ff;
            border: 1px solid #5569ff;
            position: relative;
        }

        &:checked + label::before,
        &:checked + label::after {
        content: "";
            width: 12px;
            height: 3px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate((-50% + 2.5px), -50%) rotate(45deg);
        }

        &:checked + label::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }

    label {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #888;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #fff;
    }
    `;

    const RadioBoxWrap = styled.div`
    
    `


    const CheckBox = ({ type = "checkbox",  inputName}) => {
        const id = useId(); // 고유 id 생성
        if(type === "checkbox")return (
        <CheckBoxWrap>
            <input id={id} type={"checkbox"} />
            <label htmlFor={id}></label>
        </CheckBoxWrap>
        )

        return (
            <RadioBoxWrap>
                <input id={inputName || id} type={"radio"} name = {inputName}/>
                <label htmlFor={inputName || id}></label> 
            </RadioBoxWrap>
        )
    };
    
    export default CheckBox;