import {createSlice} from '@reduxjs/toolkit'
import { addTodo, getAllTodosThunk } from '../actions/asyncAPI';

const options = {
    name: 'todos',
    initialState : {
        allTodos: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
        addNewTodo: (state,action) => {
             state.push(action.payload)
        },
},
extraReducers: {
  [addTodo.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [addTodo.fulfilled]: (state, action) => {
      console.log("AddTodo Fullfilled")
      state.allTodos.push(action.payload)
      state.isLoading = false;
      state.hasError = false;
    },
    [addTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getAllTodosThunk.pending]: (state, action) => {
      console.log("All todos Pending")
      state.isLoading = true;
      state.hasError = false;
    },
    [getAllTodosThunk.fulfilled]: (state, action) => {
      console.log(state.allTodos)
      state.allTodos = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [getAllTodosThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }

}}

export const todosSlice = createSlice(options)

export const selectAllTodos = state => state.todos.allTodos;

export const {getAllTodos,addNewTodo,editTodo} = todosSlice.actions;

export default todosSlice.reducer
