import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cat: "Chatgpt"
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      setCat: (state, action) => {
        state.cat = action.payload
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setCat } = categorySlice.actions
  
  export default categorySlice.reducer