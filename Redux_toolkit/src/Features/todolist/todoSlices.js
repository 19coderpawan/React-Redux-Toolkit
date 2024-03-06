// Import the createSlice and nanoid functions from the @reduxjs/toolkit package
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

// Define the initial state of the todoslice
const initialState = {
  todos: [{
    id:1,
    text:"pawan"
  }],
};

let input="";
// Create a new slice using the createSlice function
export const todoslice = createSlice({
  name: "todo", // The name of the slice
  initialState, // The initial state of the slice
  reducers: {
    // Define the reducers for the slice
    addTodo: (state, action) => {
      // Create a new todo object with a unique id and the text from the action payload
      const newtodo = {
        id: nanoid(),
        text: action.payload,
      };
      // Add the new todo to the todos array in the state
      state.todos.push(newtodo);
    },
    removeTodo: (state, action) => {
      // Filter out the todo with the id from the action payload from the todos array in the state
      state.todos = state.todos.filter(
        (eachtodo) => eachtodo.id !== action.payload
      );
      // console.log(action.payload)
    },
    updateTodo:(state,action)=>{
      // In this updated version, the map function is used to iterate over the todos array. 
      // If the current todo's id matches the id from the action payload, the updated todo is returned. 
      // Otherwise, the current todo is returned unchanged. Finally, the new state of the todos array 
      // is assigned back to the todos array in the state.
      // const updateid=action.payload.id;
      // const newstate=state.todos.map((currtodo)=>{
      //   currtodo.id===updateid?action.payload:currtodo
      // })
      const newState = state.todos.map((curr) =>
      curr.id === action.payload.id ? { ...curr, text:input} : curr
    );
    state.todos = newState;
    },
    updateinput:(state,action)=>{
      input=action.payload;
    }
  },
});

// then you have to export your fuctions beacause using this functions only you are going to change the state or update the state.

export const  {addTodo,removeTodo,updateTodo,updateinput}=todoslice.actions

// now also you have to export the reducer to let your store have access to them.

export default todoslice.reducer 

// const initialState = {
//   todos: [{
//     id:1,
//     text:"pawan"
//   }],
// };

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos = [...state.todos, action.payload];
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;

