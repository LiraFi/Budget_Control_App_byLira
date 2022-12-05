import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyItem } from "../../kind/money";

const initialState: MoneyItem[] = []

const expenseSlicer = createSlice ({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => [...state, action.payload],
        deleteExpense: (state, action: PayloadAction<number>) => state.filter(item => item.id !== action.payload)
    }
})

const expenseReducer = expenseSlicer.reducer 
export const {addExpense, deleteExpense} = expenseSlicer.actions
export default expenseReducer