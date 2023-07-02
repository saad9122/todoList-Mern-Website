import { createAsyncThunk } from "@reduxjs/toolkit";

import { addNewTodo,getAllTodos } from "../reducers/todoSlice";
import axios from 'axios'
const API_URL = 'http://localhost:5000' 


export const addTodo = createAsyncThunk(
    "todo/addNewTodo",
    async (todo,thunkAPI) => {
        try{

        const responce = await axios.post(`${API_URL}/todos`,{todo})        
        return responce.data

        }catch(err) {

            console.log("Error while adding Todo",err.message)
        }
        
    }
)   

export const getAllTodosThunk = createAsyncThunk(
    'todo/getAllTodos',
    

    async() => {
        try{
            
        const responce = await axios.get(`${API_URL}/todos`)

        return responce.data;

        }catch(err) {
            console.log("Error while Loading All todos",err.message)

    }

        }
    
)