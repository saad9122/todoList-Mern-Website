import axios from "axios"

import { API_URL } from "../data"


export const loginRequest = async(data) => {

    try {

        const user = await axios.post(`${API_URL}/users/login`,data)


    }catch(err){
        console.log("Error in login Request",err.message)
    }

}