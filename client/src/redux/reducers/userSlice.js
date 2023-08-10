import { createSlice } from "@reduxjs/toolkit"

import { asyncLoginUser } from "../actions/userThunkAPI"


const options = {
    name:"users",
    initialState: {
        userInfo: {},
        isLoading:false,
        hasError:false,
        isAuthenticated:false
    },
    reducers: {
        loggedInUser : (state,action) => {
            state.userInfo = action.payload
            state.isAuthenticated = true
        },
        logout: (state,action) => {
            state.userInfo = {};
            state.isAuthenticated = false;
        }
    }
    ,extraReducers: {
        "user/login/pending" : (state,action) => {

            state.isLoading = true;
            state.hasError = false
            
        },
        "user/login/fulfilled" : (state,action) => {
            
            state.userInfo = action.payload;
            state.isLoading = false;
            state.hasError = false  

            state.userInfo ?  state.isAuthenticated = true : state.isAuthenticated = false
                    },
        "user/login/rejected" : (state,action) => {
            state.isLoading = false;
            state.hasError = true  
            state.isAuthenticated = false  
        },
        "user/signup/pending" : (state,action) => {

            state.isLoading = true;
            state.hasError = false
            
        },
        "user/signup/fulfilled" : (state,action) => {
            
            state.userInfo = action.payload;
            state.isLoading = false;
            state.hasError = false  

            state.userInfo ?  state.isAuthenticated = true : state.isAuthenticated = false
                    },
        "user/signup/rejected" : (state,action) => {
            state.isLoading = false;
            state.hasError = true  
            state.isAuthenticated = false  
        }
    }
}

export const userSlice = createSlice(options)

export const {loggedInUser,logout} = userSlice.actions;

export const selectUser = state => state.user   

export default userSlice.reducer