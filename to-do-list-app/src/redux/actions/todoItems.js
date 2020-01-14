import {
    GET_TODO_ITEM,
    GET_DELETED_TODO_ITEM,
    GET_COMPLETED_TODO_ITEM
} from "../constants/todoItems";

export function addTodoItem(data){
  return async() => {
    localStorage.setItem('todolist',JSON.stringify(data));
  }
};

export function getTodoItem(){
    return async(dispatch) => {
      const getDataTodo = JSON.parse(localStorage.getItem('todolist'));
      dispatch({
        type:GET_TODO_ITEM,
        payload:getDataTodo
      })
    }
  };

export function deleteTodoItem(data){
    return async() => {
     localStorage.setItem('deletedList',JSON.stringify(data));
    }
  };

  export function getDeletedItem(){
    return async(dispatch) => {
      const deletedTodoItem = JSON.parse(localStorage.getItem('deletedList'));
      dispatch({
        type:GET_DELETED_TODO_ITEM,
        payload:deletedTodoItem
      })
    }
  };

  export function completeTodoItem(data){
    return async() => {
     localStorage.setItem('completedList',JSON.stringify(data));
    }
  };

  export function getCompletedItem(){
    return async(dispatch) => {
      const completedTodoItem = JSON.parse(localStorage.getItem('completedList'));
      dispatch({
        type:GET_COMPLETED_TODO_ITEM,
        payload:completedTodoItem
      })
    }
  };
