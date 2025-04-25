import React, {useState} from 'react'
import {scissorsImg, rockImg, paperImg} from '../index'
import Player from '../components/Player';

const Game = () => {
    // 플레이어, 컴, 결과의 선택의 값을 담을 상태변수
    const [playerSelect, setPlayerSelect] = useState(null); // 최초에는 선택을 안함
    const [comSelect, setComSelect] = useState(null) // 최초에는 선택 안함
    const [results, setResult] = useState("대기중") 

    const select = {
        scissors : {
            name : "가위",
            img : scissorsImg
        },
        rock : {
            name : "바위",
            img : rockImg
        },
        paper : {
            name : "보",
            img : paperImg
        }
    }   // 선택을 보여주는 컴포넌트

    return (
        <div className='player-wrap'>
            <Player name="플레이어" selectImg={select.scissors.img} resultText={"승리"}/>
            <Player name="컴퓨터" selectImg={select.scissors.img} />
        </div>
    )
}

export default Game
