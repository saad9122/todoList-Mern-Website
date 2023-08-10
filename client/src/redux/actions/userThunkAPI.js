import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../data";
import axios from "axios";
import { loggedInUser } from "../reducers/userSlice";


export const AsyncLoggedInUser = (token) => async(dispatch) => {

    try {

        const res = await axios.get(`${API_URL}/loginCheck`,{
            headers: {
                authorization: `Bearer ${token}`
            }
        })

        dispatch(loggedInUser(res.data))



    }catch(err) {
        console.log("Error in user authentication",err.message)
    }

}

export const asyncLoginUser = createAsyncThunk(
    "user/login",
    async (data,thunkAPI) => {

        try{


            const res = await axios.post(`${API_URL}/users/login`,{data})

            localStorage.setItem("userInfo",JSON.stringify(res.data.token))
                        
            return res.data

        }catch(err) {
            console.log("Error while user Login",err.message)
        }
    }
)


export const AsyncSignupThunk = createAsyncThunk(
    "user/signup",

    async(data,thunkAPI) => {
        try {

            const res = await axios.post(`${API_URL}/users/signup`,{data})

            localStorage.setItem('userInfo',JSON.stringify(res.data.token))

            return res.data

        }catch(err) {
            console.log("Error while signing Up user",err.message)
        }

    }

)