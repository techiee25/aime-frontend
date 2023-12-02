import { configureStore } from '@reduxjs/toolkit'
import aimeReducer from './aimeSlice'

export const store = configureStore({
    reducer: {
        aime: aimeReducer,
    },
})