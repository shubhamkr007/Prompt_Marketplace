import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    email: "",
    lastName: "",
    prompts : [],
    _id : ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        loginRedux : (state, action)=>{
            // console.log(action.payload);
            // state.user = action.payload;
            state._id = action.payload._id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.prompts = action.payload.prompts;
        },
        logoutRedux : (state, action)=>{
            // console.log(action.payload);
            // state.user = action.payload;
            state._id = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.prompts = "";
        }
    }
})

export const {loginRedux, logoutRedux} = userSlice.actions

export default userSlice.reducer;