import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const aimeSlice = createSlice({
    name: 'aimeSlice',
    initialState,
    reducers: {
        aimeLogin: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { aimeLogin } = aimeSlice.actions

export default aimeSlice.reducer