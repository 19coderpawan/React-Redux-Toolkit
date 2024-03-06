import React from "react";
// In this file i am going to list all the todos items and also going to assign the delete button.
// to list all the item we are going to use the useSelcetor to access the state and then we can map the array that contain the items.
// Also , i am going to use the dispatch method also beacuse in this file also i have to call the delete action using the reducers.

import { useDispatch, useSelector } from "react-redux";
import { removeTodo ,updateTodo} from "../Features/todolist/todoSlices";

const Todolist = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  
  return (
    <div>
      <div className="text-red">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <div className="flex gap-1">

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
            <button 
            onClick={()=>dispatch(updateTodo({id:todo.id,text:"pawan"}))}
            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
            <i className="fa-regular fa-pen-to-square"></i>
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;

