import React from "react";
import {
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Table,
	TableFooter,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { MoneyItem } from "../kind/money";

const StateList = ({ list }: { list: MoneyItem[] }) => {
	const [page, setPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 5));
		setPage(0);
	};

	return (
		<TableContainer>
			StateList
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Title</TableCell>
						<TableCell>Amount</TableCell>
						<TableCell>Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{list.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.title}</TableCell>
							<TableCell>{item.amount}</TableCell>
							<TableCell>{item.date}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TableCell>
				<TableFooter>
					<TablePagination
						component="div"
						rowsPerPageOptions={[5, 10, 25]}
						count={100}
						page={page}
						onPageChange={handleChangePage}
						rowsPerPage={rowsPerPage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						labelRowsPerPage={<span>Rows:</span>}
						backIconButtonProps={{ color: "primary" }}
						nextIconButtonProps={{ color: "primary" }}
					></TablePagination>
				</TableFooter>
			</TableCell>
		</TableContainer>
	);
};

export default StateList;
