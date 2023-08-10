import { asyncAddTodo, getAllTodosThunk } from '../actions/asyncAPI.js';
import {createSlice} from '@reduxjs/toolkit'


const options = {
    name: 'todos',
    initialState : {
        allTodos: [],
        isLoading: false,
        hasError: false,
        sortBy:"AtoZ",
    },
    reducers: {
        editTodo: (state,action) => {
          state.allTodos = state.allTodos.map(todo => todo._id === action.payload._id ? action.payload : todo)
        },
        deleteTodo: (state,action) => {

          state.allTodos = state.allTodos.filter(todo => todo._id !== action.payload._id)
        },
        toggleStatus: (state,action) => {

          state.allTodos = state.allTodos.map(todo => todo._id === action.payload._id ? {...todo,status: action.payload.status} : todo)
        },

        deleteDoneTodos: (state,action) => {

          state.allTodos = state.allTodos.filter(todo => !todo.status)
        },
        sortTodosBy: (state,action) => {
          state.sortBy = action.payload
        }
},
extraReducers: {
  "todo/addNewTodo/pending": (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    "todo/addNewTodo/fulfilled": (state, action) => {
      state.allTodos.push(action.payload)
      state.isLoading = false;
      state.hasError = false;
    },
    "todo/addNewTodo/rejected": (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    "todo/getAllTodos/pending": (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    "todo/getAllTodos/fulfilled": (state, action) => {
      state.allTodos = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    "todo/getAllTodos/rejected": (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
}

}

export const todosSlice = createSlice(options)

export const selectAllTodos = state => state.todos;

export const selectSortBy = state => state.todos.sortBy;

export const {getAllTodos,addNewTodo,editTodo,deleteTodo,toggleStatus,deleteDoneTodos,sortTodosBy} = todosSlice.actions;

export default todosSlice.reducer
