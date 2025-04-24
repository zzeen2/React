import { Component } from "react";
// import book from "./images/book.png" // 이미지를 모듈로 가져오기 //src="/static/media/book.d7f4b3dd1bc801999f08.png" << 이렇게 해시문자열로 캐싱 작업이 일어남
import BombGame from "./page/BombGame";

export default class App extends Component {
  render() {
    return(
        <>
          <BombGame/>
        </>
    )
  }
}