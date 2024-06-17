import TodoCard from "../../component/TodoCard";
import { TodoFilter } from "../../component/TodoFilter";
import {
  ADD_TODO,
  CHANGE_THEME,
  REMOVE_TODO,
  TODO_CLEAR,
  TODO_FILTER,
  UPDATE_TODO,
  UPDATE_TODO_STATUS,
} from "../actionType/actionType";

export function actionAddTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function actionRemoveTodo(payload) {
  return { type: REMOVE_TODO, payload };
}

export function actionUpdateTodo(payload) {
  return { type: UPDATE_TODO, payload };
}

export function actionUpdateStatusTodo(payload) {
  return { type: UPDATE_TODO_STATUS, payload };
}

export function actionFilterTodo(payload) {
  return { type: TODO_FILTER, payload };
}

export function actionClearTodo(payload) {
  return { type: TODO_CLEAR, payload };
}

export function actionChangeTheme(payload) {
  return { type: CHANGE_THEME, payload };
}

export function readLocalStorage(key) {
  let data = JSON.parse(localStorage.getItem(key));
  return data;
}

export function writeLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function findCompleteTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (!hours) {
    return `${remainingMinutes} Minutes`;
  }

  const formattedTime = `${hours} Hours ${remainingMinutes} Minutes`;

  return formattedTime;
}

export function convertNormalTime(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}`;

  return formattedDateTime;
}
