import { readLocalStorage, writeLocalStorage } from "../action/action";
import {
  ADD_TODO,
  CHANGE_THEME,
  REMOVE_TODO,
  TODO_CLEAR,
  TODO_FILTER,
  UPDATE_TODO,
  UPDATE_TODO_STATUS,
} from "../actionType/actionType";

let initState = readLocalStorage('store') || {
  todo: [],
  darkTheme: false,
  backupTodo: [],
};

console.log(readLocalStorage('store'))

export function reducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
        backupTodo: [...state.todo, payload],
      };

    case REMOVE_TODO:
      let todos = state.todo.filter((item) => item.task !== payload);
     // console.log(todos);
      return { ...state, todo: [...todos], backupTodo: [...todos] };

    case UPDATE_TODO:
      let updatedTodo = state.todo.map((item, i) => {
        if (item.id === payload.id) {
          item = payload;
        }
        return item;
      });
      //console.log(updatedTodo)
      return { ...state, todo: [...updatedTodo], backupTodo: [...updatedTodo] };

    case UPDATE_TODO_STATUS: {
      let updatedTodoStatus = state.todo.map((item, i) => {
       // console.log(item.status);

        if (item.id === payload) {
          item.status = !item.status;
          item.completed = (Date.now()-item.date)
        }
        return item;
      });
      console.log(updatedTodoStatus);
      return {
        ...state,
        todo: [...updatedTodoStatus],
        backupTodo: [...updatedTodoStatus],
      };
    }

    case TODO_FILTER: {
      return { ...state, todo: [...payload] };
    }

    case TODO_CLEAR:{
      return { ...state, todo: [...payload],backupTodo:[...payload] };
    }

    case CHANGE_THEME : {
      return {...state,darkTheme:payload}
    }

    default:
      return { ...state };
  }
}
