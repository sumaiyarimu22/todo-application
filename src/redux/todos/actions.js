import {
  ADDED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
  ALLCOMPELETED,
  CLEARCOMPELETED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompeleted = () => {
  return {
    type: ALLCOMPELETED,
  };
};

export const clearCompeleted = () => {
  return {
    type: CLEARCOMPELETED,
  };
};
