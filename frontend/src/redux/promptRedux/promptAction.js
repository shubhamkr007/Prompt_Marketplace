import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../services/API'

export const getPrompts = createAsyncThunk(
    'prompts/getPrompts',
    async({rejectWithValue})=>{
        try{
            const response = await API("api/v1/prompt/getall", {
                method: "GET", // or any other HTTP method
                headers: {
                  "Content-Type": "application/json",
                },
              });
          
              const userData = await response.json();
            //   console.log(userData);

            if(userData?.prompts){
                return userData?.prompts;
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
