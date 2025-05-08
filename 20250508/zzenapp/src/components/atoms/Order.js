import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {
    // 마운트 단계에서 api 호출을 통해 데이터를 받은 상태 (임시데이터) 
    const data = [
        {code : "A-01", name : "김치볶음밥", price : 10000},
        {code : "A-02", name : "계란볶음밥", price : 15000},
        {code : "A-03", name : "제육볶음밥",price : 20000},
        {code : "A-04", name : "고등어구이", price : 30000}
    ]
    const [select, setSelect] = useState(null);

    const [text, setText] = useState(null)
    const [contentText, setcontentText] = useState(null)

    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.userReducer.userInfo);
    const order = useSelector(state => state.orderReducer); // 키값을 안쓰면 상태 객체 전체 주시
    
    const orderHandler = () => {
        if(userInfo){
            dispatch({
                type : data[select].code, 
                payload : {orderName : data[select].name, 
                price : data[select].price}
            })
        }else {
            setText("로그인 이후에 이용해 주세요")
        }
    }

    useEffect(()=> {
        if(order.orderName === "") return // 마운트때는 호출이 안되고 업데이트 때만 호출이 되도록 
        // 업데이트 구문
        setcontentText(`주문자 ${userInfo.nick}가 맛있는 ${order.orderName}를 주문했고, 결제 금액은 ${order.price}입니다.`)
    },[order])

    return (
        <div>
            {text}<br/>
            주문할 메뉴는 : {select !== null ? data[select].name : "선택해주세요~"} <br/>
            {data.map((el,i) => <button onClick={()=> setSelect(i)}>{el.name}</button>)}<br/>
            <button onClick={orderHandler}>주문하기</button><br/>
            안내 : {contentText}<br/>
        </div>
    )
}

export default Order
