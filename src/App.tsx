import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";

import "./App.css";
import Money from "./components/Money";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import { MoneyItem } from "./kind/money";

function App() {
	const [incomes, setIncomes] = useState<MoneyItem[]>([]);
	const [spents, setSpents] = useState<MoneyItem[]>([]);
	const [savings, setSavings] = useState(0);
	const [balance, setBalance] = useState(0);
	const totalIncome = incomes.reduce(
		(prev, current) => prev + current.amount,
		0
	);
	const totalSpent = spents.reduce((prev, current) => prev + current.amount, 0);
	useEffect(() => {
		setBalance(totalIncome - totalSpent - savings);
	}, [incomes, spents, savings]);
	return (
		<Box className="App" sx={{ bgcolor: "background.default" }}>
			<Grid container spacing={2} padding={6}>
				<Grid item xs={4}>
					<Money variant="Incomes" list={incomes} setList={setIncomes} />
				</Grid>
				<Grid item xs={4}>
					<Money variant="Expences" list={spents} setList={setSpents} />
				</Grid>
				<Grid item xs={4}>
					<Savings savings={savings} />
				</Grid>
			</Grid>
			<Balance balance={balance} setSavings={setSavings} />
		</Box>
	);
}

export default App;
