/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import cancelImage from "../assets/images/cancel.png";
import { toggled, colorSelected, deleted } from "../redux/todos/actions";
export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { text, compeleted, color, id } = todo;

  const handleToggled = (todoId) => {
    dispatch(toggled(todoId));
  };

  const handleColorsecleted = (todoId, color) => {
    dispatch(colorSelected(todoId, color));
  };

  const handleDeleted = (todoId) => {
    dispatch(deleted(todoId));
  };

  return (
    <div className='flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0'>
      <div
        className={`rounded-full bg-white border-2 relative border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          compeleted && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type='checkbox'
          checked={compeleted}
          onChange={() => handleToggled(id)}
          className='opacity-0 absolute rounded-full'
        />

        {compeleted && (
          <svg
            className='fill-current w-3 h-3 text-green-500 pointer-events-none'
            viewBox='0 0 20 20'
          >
            <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${compeleted && "line-through"}`}>
        {text}
      </div>

      <div
        onClick={() => handleColorsecleted(id, "green")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500  border-green-500 ${
          color === "green" && "bg-green-500"
        }`}
      ></div>

      <div
        onClick={() => handleColorsecleted(id, "yellow")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500  border-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
      ></div>

      <div
        onClick={() => handleColorsecleted(id, "red")}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${
          color === "red" && "bg-red-500"
        }`}
      ></div>

      <img
        onClick={() => handleDeleted(id)}
        src={cancelImage}
        className='flex-shrink-0 w-4 h-4 ml-2 cursor-pointer'
        alt='Cancel'
      />
    </div>
  );
}
