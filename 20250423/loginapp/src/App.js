import React, {Component} from "react";
import Container from "./components/container/Container";
import Input from "./components/input/Input";

class App extends React.Component{
  // constructor() {
  //   super();

  // }

  render() {
    return (
      <>
      <h2>로그인폼</h2>
      <Container>
      <Input content="아이디 또는 전화번호"/>
      <Input content="비밀번호"/>
      </Container>
      </>
    )
  }
}

export default App;