import { createSlice } from "@reduxjs/toolkit";


const savingsSlicer = createSlice({
    name: "savings",
    initialState: 0,
    reducers: {
        addSavings: (state, action) => state + action.payload,
        resetSavings: (state) => state - state
    }
})

const savingsReducer = savingsSlicer.reducer
export const { addSavings, resetSavings } = savingsSlicer.actions
export default savingsReducer