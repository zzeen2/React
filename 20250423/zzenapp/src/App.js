import React, {Component} from "react";
import Card from "./components/card/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count : 0
    }
    // this.counterHandler = this.counterHandler.bind(this); // this 바인딩!
  }
  counterHandler () {
    this.setState({count : this.state.count + 1})
  }
  // counterHandler = () => {
  //   this.setState({ count: this.state.count + 1 });
  // }
  // {this.counterHandler} << 이렇게 클릭이벤트에서 사용 가능
  
  render() {
    return (
      <>
      <div>count : {this.state.count}</div>
      <Card content="안녕" />
      <Card content="잘가" />
      <button onClick={() => this.counterHandler()}>증가</button>
      {/* {}로 감싼 이유 = this바인딩 */}
      </>
    )
  }
}

export default App;

/*
콘솔값이 찍히는 순서 
------------------------------ 초기 화면
1. 컴포넌트 1의 props (초기값)
2. 안녕 나 리렌더링 됐어 << 첫번째 컴포넌트 렌더링
3. 컴포넌트 2의 props (초기값)
4. 잘가 나 리렌더링 됐어 << 두번째 컴포넌트 렌더링
5. 0 << 첫번째 컴포넌트 componentDidMount() (초기값)
6. 컴포넌트가 생겼어 응애 << 첫번째 컴포넌트
7. 0 << 두번째 컴포넌트 componentDidMount() (초기값)
8. 컴포넌트가 생겼어 응애 << 두번째 컴포넌트
------------------------------ 첫번째 컴포넌트에 증가버튼을 눌렀을 때
9. 카운트가 증가되었습니다 0 << 첫번째 컴포넌트의 상태값이 업데이트 되기전에 콘솔이 찍힌다. 왜냐? setState는 즉시 동작하지 않고 비동기적으로 상태를 갱신하기 때문. 그래서 26번 라인의 상태 콘솔은 업데이트 되기 전의 상태인 count를 참조하게 된다.
10. 안녕 나 리렌더링 됐어 << render() 함수가 호출되면서 UI 변경을 준비함 (이때는 상태변수가 업데이트 된 상태) 그 다음 돔 업데이트
11. 컴포넌트가 변화했어 << 리렌더링이 끝난 후 실행되는 함수 componentDidUpdate()
12. 카운트가 증가되었습니다 (컴포넌트 업데이트) 1 << componentDidUpdate()
*/

/*
리엑트 생명주기 요약 
setState() 호출 → 상태 변경 요청

React가 상태를 업데이트함 (비동기적으로)

render() 함수 호출 → UI 변경 준비

화면(UI)이 실제로 바뀜 (DOM 업데이트됨)

componentDidUpdate() 실행됨 ← 여기!

*/