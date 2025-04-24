// 얘는 게임의 룰 등의 플레이 구성하는 컴포넌트

import { Component } from "react";
import Bomb from "../components/Boom"

export default class BombGame extends Component {

    constructor() {
        super();
        this.state = {
            Over : false,
            Count : 0,
            bomb : Math.floor(Math.random() * 9), // 0~8 사이값 랜덤으로 뽑기
            bombCount : 9
        }
    }

    setCount = () => { // 폭탄이 아닌 칸
        this.setState({...this.state, Count : this.state.Count + 1})
    }

    setGameOver = () => { // 폭탄인 칸
        this.setState({...this.state, Over : true});
    }
    
    setBomb = () => { // 폭탄 칸 생성
        const {bombCount} = this.state;
        // fill 배열안에 값을 채우는 메서드 
        return(Array(bombCount).fill(0).map((el,index) => <Bomb setValue={index ===  this.state.bomb ? this.setGameOver : this.setCount}/>))// 9개의 자리를 만들고, 0을 넣는다.
    }
    restart = () => {
        // 상태 초기화, 다시 bomb-game-wrap 보여주기
        this.setState({
            Over: false,
            Count: 0,
            bomb: Math.floor(Math.random() * 9), 
            bombCount: 9
        });
    }
    
    render () {
        if(this.state.Over) {
            return (
            <div>
                <div>클릭한 수: {this.state.Count}</div>
                <div>게임 오버 ㅠㅠ</div>
                <button onClick={this.restart}>다시하기</button>
            </div>
            )
        }
        return (<>
            <div className="bomb-game-wrap">
                <this.setBomb/>
            </div>
        </>)
    }
}