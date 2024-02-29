// firstly configure the store.
import { configureStore } from '@reduxjs/toolkit'; // firslty you have to configure your store.
import { todoReducer } from '../Features/todolist/todoSlices';

// then create the store and export it.
export const Store = configureStore({
    // here you have to register all the reducers you have created in key value pairs.
    // the key represents the name of the state slice that will be managed by this reducer.
    // the value represents the reducer function itself.
    reducers: {
        // the key 'todos' represents the state slice that will be managed by the 'todoReducer' function.
        todos: todoReducer,
    },
});


