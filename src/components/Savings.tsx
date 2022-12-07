import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
	Box,
	CircularProgress,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

import { SavingsProp } from "../kind/savings";

const Savings = ({ savings }: SavingsProp) => {
	const [goal, setGoal] = useState(0);
	const incomes = useSelector((state: any) => state.incomeReducer);
	const expenses = useSelector((state: any) => state.expenseReducer);

	console.log("incomes state: ", incomes);
	console.log("expenses state:", expenses);
	return (
		<Stack sx={{ color: "text.primary" }} padding={2} spacing={3}>
			<p>Current savings: {savings}</p>
			<p>Current goal: {goal}</p>
			<Box sx={{ position: "relative", display: "inline-flex" }}>
				<CircularProgress
					variant="determinate"
					value={(savings / goal) * 100}
				/>
				<Box
					sx={{
						top: 11,
						left: 5,
						bottom: 0,
						right: 0,
						position: "absolute",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Typography variant="caption" component="div">{`${Math.round(
						(savings / goal) * 100
					)}%`}</Typography>
				</Box>
			</Box>
			<Box component="form">
				<TextField
					label="Set Goal"
					type="number"
					name="goal"
					onChange={(e) => setGoal(Number(e.target.value))}
				/>
			</Box>
		</Stack>
	);
};

export default Savings;
