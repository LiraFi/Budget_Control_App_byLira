import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "./reducers/expenses";
import incomeReducer from "./reducers/incomes";
import savingsReducer from "./reducers/savings";


const store = configureStore({
    reducer:{
        incomeReducer,
        expenseReducer,
        savingsReducer
    }
})

export default store
