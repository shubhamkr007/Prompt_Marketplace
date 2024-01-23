import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../services/API'

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async({rejectWithValue})=>{
        try{
            const response = await API("api/v1/auth/current-user", {
                method: "GET", // or any other HTTP method
                headers: {
                  "Content-Type": "application/json",
                },
              });
          
              const userData = await response.json();
            //   console.log(userData?.user);

            if(userData?.user){
                return userData?.user;
            }
        }catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }else{
                return rejectWithValue(error.message)
            }
        }
    }
)
