import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/todolist/todoSlices';
const  AddTodo = () => {
  const [inputdata,Setinputdata]=useState("");
  
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    // now you have to dispatch the data also to the state through the reducers.
    dispatch(addTodo(inputdata));
    Setinputdata("")

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='form_section'>
        <input type="text" value={inputdata} className='input_field'
        onChange={(e)=>Setinputdata(e.target.value)} />
        <button type="submit" className='Submit_btn'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
