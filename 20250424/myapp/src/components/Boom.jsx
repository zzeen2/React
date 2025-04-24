// 얘는 게임의 재료 각각의 책임

import { Component } from "react";
import { BombImage, BombImageActive } from "../images";

export default class Boom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "zzeen",
            isActive : false
        }
    }
    componentDidMount() {
        console.log("나 폭탄 생성되었어.")
    }
    componentDidUpdate() {
        console.log("나 터진다")
    }
    bombActiveHandler =() => {
        if(this.state.isActive) return //한번 터진애들은 리렌더링을 막음
        this.setState({...this.state, isActive : true}) // 클릭되면 isAvtive true로 바뀜 
        this.props.setValue(); // 부모가 준 함수 실행 (카운트 증가 또는 게임 종료)
    }
    render () {
        return (<>
        <div className="bomb-wrap" onClick={this.bombActiveHandler}>
            <img src={this.state.isActive ? BombImageActive : BombImage} alt="boom" />
        </div>
        </>)
    }
}