import { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        super();
        console.log(props) // 빈객체 // 부모컴포넌트에서 전달하는 값
        
        // 상태
        this.state = {
            count : 0
        }
    }

    componentDidMount() {
        console.log(this.state.count)
        console.log("컴포넌트가 생겼어 응애")
    }

    componentDidUpdate() {
        console.log("컴포넌트가 변화했어")
        console.log("카운트가 증가되었습니다", this.state.count)
        this.reward()
    }

    incrementCount = () => {
        this.setState({ count : this.state.count + 1})
        console.log("카운트가 증가되었습니다", this.state.count) // 업데이트 되기 전에 콘솔이 찍힘 
        // this.reward(); // 여기에 작성하면 숫자 하나 밀림
    }

    // 카운터가 10이되면 보상을 주고싶어
    reward = (count) => {
        if(count >= 10){
            console.log("보상 당첨")
        }
    }

    render(){
        console.log(`${this.props.content}나 리렌더링 됐어`)
        return (
            <div className="card">
                <div>내 점수는 : {this.state.count}</div>
                <div className="title"></div>
                <div className="content"></div>
                <div>{this.props.content}</div>
                <div>123</div>
                <button onClick={this.incrementCount}>증가</button>
            </div>
        )
    }
}