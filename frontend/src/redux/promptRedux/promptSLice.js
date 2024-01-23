import { createSlice } from "@reduxjs/toolkit";
import { getPrompts } from "./promptAction";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const promptSlice = createSlice({
  name: "prompts",
  initialState: initialState,
  reducers: {},
  extraReducers(builder){

    builder.addCase(getPrompts.pending, (state) => {
      state.loading = true;
      state.error = null;
      // console.log("jksffhbskjfklj")
    });
    
    builder.addCase(getPrompts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.data = payload;
        // console.log("sdfghjhgfd");
        
    });
    
    builder.addCase(getPrompts.rejected, (state, { payload }) => {
        // console.log("jksffhbskjfklj")
      state.loading = false;
      state.error = payload;
      console.log(payload);
    });

  },
});

export default promptSlice;
