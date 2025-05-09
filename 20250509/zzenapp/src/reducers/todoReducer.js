import {readTodoLoading, readTodoResult, createTodo, deleteTodo} from "../actions/todoActions"

const initState = {
    loading : false,
    todos : [],
}

const reducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case readTodoLoading:
            return {...state, loading : true};
        case readTodoResult:
            return {...state, loading : false, todos : payload.data};
        case createTodo:
            return {...state, todos : [...state.todos, {name : payload.name}]};
        case deleteTodo:
            return {...state, todos : state.todos.filter(todo => todo.id !==payload.id)}
        default:
            return state;
    }
}

export default reducer