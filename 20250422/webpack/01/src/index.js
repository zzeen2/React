const root = ReactDOM.createRoot(document.querySelector("#root"))

// jsx 문법을 사용하지 못하니
// react의 함수를 직접 호출해서 리엑트 요소를 만들어서 제공해보자
root.render(React.createElement("div", null, "hello react"))