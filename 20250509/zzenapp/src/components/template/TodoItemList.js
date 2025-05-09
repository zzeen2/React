import React from 'react'
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { deleteTodoAction } from '../../actions/todoActions';

const TodoListWrapStyle = styled.div`
  width: 1080px;
  height: 480px;
  border : 1px solid;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;
  margin: 20px;

  .item {
    width: 100%;
    height: 40px;
    display: flex;
    & span { // 자식요소(뜨어쓰기)
      width: 40px;
      height: 100%;
      border-right:1px solid ;
      box-sizing: border-box;
      border-bottom : 1px solid;
      display: inline-block;
    }
    & span:last-child{
      width: 1040px;
      border-bottom : 1px solid;
    }
    &.title { // 클래스 붙히기
      background-color: #f2f5f9;
      text-align: center;
    }
  }
`

const TodoItemList = ({todos}) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodoAction(id));
  }

  return (
    <TodoListWrapStyle>
      <div className='item title'>
        <span>No</span>
        <span>할일 내용</span>
      </div>
      {todos.map((el, index) => (
        <div className='item' > 
        <span>{index}</span>
        <button onClick={() => deleteHandler(el.id)}>삭제</button>
        <span>{el.name}</span>
      </div>))}
    </TodoListWrapStyle>
  )
}

export default TodoItemList
