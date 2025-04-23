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