import * as actionTypes from "../constants/todoItems";

const initialState = {
    dataTodoItem: [],
    todoItems: [],
    isLoading:false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM:
            return {
            ...state,
            dataTodoItem: action.payload,
            };
        case actionTypes.GET_TODO_ITEM:
            return {
            ...state,
            todoItems: action.payload,
            };   
        default:
            return state;
    }
  };