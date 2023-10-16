/* eslint-disable no-case-declarations */
import { initialState } from "./initialState";
import {
  ADDED,
  TOGGLED,
  COLORSELECTED,
  DELETED,
  ALLCOMPELETED,
  CLEARCOMPELETED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          compeleted: false,
        },
      ];

    case TOGGLED:
      return [
        ...state.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            compeleted: !todo.compeleted,
          };
        }),
      ];

    case COLORSELECTED:
      const { todoId, color } = action.payload;

      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPELETED:
      return [
        state.map((todo) => {
          return {
            ...todo,
            compeleted: true,
          };
        }),
      ];

    case CLEARCOMPELETED:
      return state.filter((todo) => !todo.compeleted);

    default:
      return state;
  }
};
export default reducer;
