import React, {Component} from "react";
import Card from "./components/card/Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count : 0
    }
  }
  counterHandler () {
    this.setState({count : this.state.count + 1})
  }
  render() {
    return (
      <>
      <div>count : {this.state.count}</div>
      <Card content="안녕" />
      <Card content="잘가" />
      <button onClick={()=> {this.counterHandler()}}>증가</button>
      </>
    )
  }
}

export default App;