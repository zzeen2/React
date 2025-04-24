# 리엑트의 이미지 렌더링 
> 리엑트는 html에서 이미지를 가져오는 방식과 조금 다르다. 왜냐하면 번들링되는 과정을 거치기 때문에 

## 이미지를 사용하는 예시

### 배포되어있는 이미지
```jsx
class App extends React.Component {
    render () {
        return <>
            <img src = "https://"></img>
        </>
    }
}
```
### import로 가져온 이미지

```jsx
import logoImg from "./images/logo.png"

class App extends React.Component {
    render() {
        return <>
            <img src={logoImg}/>
        </>
    }
}
```
> webpack으로 이미지를 번들링하고 해시를 붙여서 관리한다. 이미지를 변경하게 된 경우 캐싱해서 좋다.

### 만약에 동적인 이미지의 이름이 있다. public
```jsx

class App extends React.Component {
    render() {
        return <>
            <img src={`/public/${this.state.props.imageName}.png`}/>
        </>
    }
}
```
*** 번들링 과정에 src의 이미지는 import하지 않으면 번들링 폴더에 포함되지 않는다. ***

### 이미지를 사용해서 지뢰찾기
1. 폭탄은 터지지 않은 상태가 있고 터진 상태가 있다. (컴포넌트의 상태를 제어해서 이미지를 조건부 렌더링)(본인이 터진지 아닌지만 알면 된다.)

2. 폭탄은 9개가 있다.(폭탄의 UI를 배치)

3. 폭탄은 본인이 정답인지 알고 있고, 정답을 다 맞추면 게임 오버 조건을 만들자. 지뢰를 찾으면 게임 오버

#### 동작 흐름
1. 앱 시작 → <App /> → <BombGame />

2. BombGame에서 폭탄 위치(bomb)를 0~8 사이에서 무작위로 생성

3. 9개의 <Bomb /> 박스 생성, 각 박스에 setValue 함수 전달. 폭탄이면 setGameOver, 아니면 setCount

4. 사용자가 박스 클릭 → bombActiveHandler() 실행. isActive가 true로 변경. 이미지가 바뀜. 부모에게 this.props.setValue() 호출

5. 폭탄이면 Over: true로 바뀌고 게임 종료 화면 표시. 아니면 카운트 증가