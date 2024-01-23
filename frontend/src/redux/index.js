import {configureStore} from '@reduxjs/toolkit'
import userSliceReducer from './userSlice'
import authSlice from './authRedux/authSlice'
import promptSlice from './promptRedux/promptSLice'
import { categorySlice } from './category'

export const store = configureStore({
    reducer: {
        user : userSliceReducer,
        auth: authSlice.reducer,
        prompts: promptSlice.reducer,
        category: categorySlice.reducer
    },
})