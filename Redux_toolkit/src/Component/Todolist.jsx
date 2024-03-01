import React from 'react'
// In this file i am going to list all the todos items and also going to assign the delete button.
// to list all the item we are going to use the useSelcetor to access the state and then we can map the array that contain the items.
// Also , i am going to use the dispatch method also beacuse in this file also i have to call the delete action using the reducers.
import {  useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../Features/todolist/todoSlices'

const Todolist = () => {

  const dispatch=useDispatch();
  const todosselctor=useSelector((state)=>state.todos)
  return (
    <div>
      {/* now map the todo list here */}
      <div>
      {todosselctor.map((element)=>{
        <div>
          <li id={element.id}>
           {element.text}
          </li>
          <button onClick={()=>dispatch(removeTodo(element.id))}>del</button>
        </div>
      })}
      </div>
    </div>
  )
}

export default Todolist
