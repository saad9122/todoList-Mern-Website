import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../reducers/todoSlice"
import userReducer from "../reducers/userSlice"



export const store = configureStore({
    reducer: {
        todos: todosReducer,
        user: userReducer
    }
})

