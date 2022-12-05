import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyItem } from "../../kind/money";

const initialState: MoneyItem[] = []

const incomeSlicer = createSlice ({
    name: "incomes",
    initialState,
    reducers: {
        addIncome: (state, action) => [...state, action.payload],
        deleteIncome: (state, action: PayloadAction<number>) => state.filter(item => item.id !== action.payload)
    }
})

const incomeReducer = incomeSlicer.reducer 
export const {addIncome, deleteIncome} = incomeSlicer.actions
export default incomeReducer