import React, { useEffect, useState } from 'react'
import Input from "../atoms/Input"
import Button from '../atoms/Button'
import Loading from '../atoms/Loading'
import TodoItemList from '../template/TodoItemList'
import {useDispatch, useSelector} from "react-redux" // 전역상태 수정 조회
import {readTodoAction, createTodoAction} from "../../actions/todoActions"

const TodoPages = () => {
    const dispatch = useDispatch();
    const {todos, loading} = useSelector(state => state)// 상태 가져오기
    const [value, setValue] = useState("")
    
    useEffect (() => {
        // 액션 생성자 호출
        dispatch(readTodoAction());
    }, [])

    const createHandler = () => {
        dispatch(createTodoAction(value))
        setValue("")
    }

    const inputValueHandler = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <Input placeholder = {"할일을 입력해주세요."} value = {value} onChange ={inputValueHandler}/>
            <Button onClick={createHandler}>할일 추가</Button>
            <TodoItemList todos={todos}/>
            {loading ? <Loading/> : null}
        </div>
    )
}

export default TodoPages
