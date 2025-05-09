import { readTodoList, createTodoList, deleteTodoList } from "../api/todo";

// 액션의 타입을 상수로 정의
// 리듀서에 전달해서 사용할 상수
// 액션 생성자 함수에서 사용할 상수 => 리듀서에서 타입을 가지고 로직 실행 
export const readTodoLoading = "TODO_LOADING";
export const readTodoResult = "TODO_RESULT";
export const createTodo = "TODO_CREATE";
export const deleteTodo = "TODO_DELETE";

// 리듀서에서 호출할 내용
const todoLoading = () => ({type : readTodoLoading}); // 리듀서에서 반환하는 상태의 값이 로딩
const todoResult = (data) => ({type : readTodoResult, payload : data}); // 리듀서에서 반환하는 값이 로딩이 완료된 상태
const todoCreate = (data) => ({type : createTodo, payload : data}); // 리듀서에서 반환하는 값이 글 등록 성공한 이후 
const todoDelete = (id) => ({type : deleteTodo, payload : id});

// 액션 생성자 함수

//readTodoAction : 글을 조회하는 함수. 로딩 이후에 글이 조회된다.
export const readTodoAction = () => {
    return async (dispatch, getState) => {
        dispatch(todoLoading()); // 리듀서 함수 호출

        const data = await readTodoList();
        dispatch(todoResult(data))// 리듀서 함수 호출
    }   
} 

// 글을 추가하는 함수
export const createTodoAction = (name) => {
    return async (dispatch, getState) => {
        await createTodoList(name);

        dispatch(todoCreate({name}));
    }
}

// 글을 삭제하는 함수
export const deleteTodoAction =(id) => {
    return async (dispatch, getState) => {
        await deleteTodoList(id);
        dispatch(readTodoAction()); // 글을 삭제하고 나서 다시 요소 불러오기
    }
}