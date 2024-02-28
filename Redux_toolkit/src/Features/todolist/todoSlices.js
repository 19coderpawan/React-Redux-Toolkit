// Import the createSlice and nanoid functions from the @reduxjs/toolkit package
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state of the todoslice
const initilization = {
  todos: [
    {
      id: nanoid(), // Generate a unique id for the todo using the nanoid function
      text: "hello world", // The text of the todo
    },
  ],
};

// Create a new slice using the createSlice function
export const todoslice = createSlice({
  name: "todo", // The name of the slice
  initilization, // The initial state of the slice
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
    removeTod: (state, action) => {
      // Filter out the todo with the id from the action payload from the todos array in the state
      state.todos = state.todos.filter(
        (eachtodo) => eachtodo.id !== action.payload
      );
    },
  },
});
