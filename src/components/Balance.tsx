import React, { useState } from "react"
import { Button, Stack, TextField } from "@mui/material"
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

import { BalanceProp } from "../kind/balance"


const Balance = ({balance, setSavings }: BalanceProp) =>{
    const [amount, setAmount] = useState(0)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (amount <= balance) {
            setSavings((savings)=> savings + amount)
        } else {
        alert ("Not enough money on your balance!");
        } 
    }
    return (
        <Stack sx={{color: "text.primary"}} direction="column" alignItems="center">
            <p>Current balance: {balance}</p>
                <Stack 
                    component="form"
                    onSubmit = {(e) => onSubmit(e)}
                    direction = "column"
                    spacing={1}>
                    <TextField
                        id="standard-number"
                        label="Top-up saving account"
                        type="number"
                        name="addSavings"
                        onChange={(e) => setAmount(Number(e.target.value))}
                        variant="standard"/>
                    <Button
                        type="submit"
                        startIcon={<AttachMoneyOutlinedIcon/>}
                        variant="outlined"> 
                        Top_up
                    </Button>
            </Stack>
        </Stack>
    )
}

export default Balance