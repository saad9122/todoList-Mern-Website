import { createAsyncThunk } from "@reduxjs/toolkit";
import {editTodo,deleteTodo,toggleStatus,deleteDoneTodos } from "../reducers/todoSlice";
import axios from 'axios'
import { API_URL } from "../../data";




export const asyncAddTodo = createAsyncThunk(
    "todo/addNewTodo",
    async (todo,thunkAPI) => {
        try{

            const token = localStorage.getItem("userInfo")
            
            const responce = await axios.post(`${API_URL}/todos`,{todo},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })   

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

            const json = localStorage.getItem("userInfo")

            const userInfo = JSON.parse(json)
            
        const responce = await axios.get(`${API_URL}/todos`,{
            headers: {
                authorization: `Bearer ${userInfo}`
              }
        })

        return responce.data;

        }catch(err) {
            console.log("Error while Loading All todos",err.message)

    }

        }
    
)

export const asyncEditTodo = (data,id) =>  async(dispatch) => {

    try{

        const res = await axios.put(`${API_URL}/todos/${id}`,{data})


        dispatch(

            editTodo(res.data)
        )

    }catch(err) {

        console.log("Error while Edit Todo",err.message)
        
    }
}

export const asyncDeleteTodo = (id) => async(dispatch) => {

    try {

        const res = await axios.delete(`${API_URL}/todos/${id}`)

        dispatch(

            deleteTodo(res.data))

    }catch(err) {

        console.log("Error while Deleteing Todo",err.message)

    }

}

export const asyncToggleStatus = (data) => async(dispatch) => {

    try {

        const res = await axios.post(`${API_URL}/todos/${data._id}`,{data})

        dispatch(toggleStatus(res.data))

    }catch(err) {
        console.log("Error while toggling Todo",err.message)
    }

}

export const asyncDeleteDoneTodos = () => async(dispatch) => {

    try{

        await axios.delete(`${API_URL}/todos`)

        dispatch(deleteDoneTodos())


    }catch(err) {
        console.log("Error while deleting All todos",err.message)
    }
}