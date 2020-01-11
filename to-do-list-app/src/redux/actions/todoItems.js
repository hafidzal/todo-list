import {
    ADD_TODO_ITEM,
    GET_TODO_ITEM
} from "../constants/todoItems";

export function addTodoItem(data){
  return async() => {
    localStorage.setItem('todoItem', data);
  }
};

export function getTodoItem(){
    return async(dispatch) => {
      const getDataTodo = localStorage.getItem('todoItem');
    //   console.log('ISI TODO : ', getDataTodo);
      dispatch({
        type:GET_TODO_ITEM,
        payload:getDataTodo
      })
    }
  };

// export const setOriginCities = (selectedOrigin) => {
//   return {
//     type: SET_ORIGIN_CITIES,
//     payload: selectedOrigin
//   }
// }
