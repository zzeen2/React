import React, { useEffect } from "react";

// props 객체
const Player = ({name, selectImg, resultText}) => {
    useEffect(()=> {
        console.log(name)
    })
    return (
        <div className="player">
            <div>{name}</div>
            <img src = {selectImg}/>
            <div>{resultText}</div>
        </div>
    )
}

export default Player