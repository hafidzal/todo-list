import * as actionTypes from "../constants/todoItems";

const initialState = {
    dataTodoItem: [],
    todoItems: [],
    deletedTodoItem: [],
    completedTodoItem: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM:
            return {
            ...state,
            dataTodoItem: action.payload
            };
        case actionTypes.GET_TODO_ITEM:
            return {
            ...state,
            todoItems: [...state.dataTodoItem, action.payload],
            };  
        case actionTypes.GET_DELETED_TODO_ITEM:
            return {
            ...state,
            deletedTodoItem: [...state.deletedTodoItem, action.payload],
            }; 
        case actionTypes.GET_COMPLETED_TODO_ITEM:
            return {
                ...state,
                completedTodoItem: [...state.completedTodoItem, action.payload],
                };   
        default:
            return state;
    }
  };