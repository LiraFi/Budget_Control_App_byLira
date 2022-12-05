import React, { useState } from "react"
import {Box, Button, TextField} from "@mui/material"
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';

import {MoneyProp} from "../kind/money"
import StateList from "./StateList"

const Money = ({variant, list, setList}: MoneyProp) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title !== "" && date !=="" && amount > 0) {
    setList ([{amount, date, title, id:Date.now()}, ...list])
    console.log({title, amount, date})
    setDate("")
    setAmount(0)
    setTitle("")
    console.log({title, amount, date})
    } else {
        alert("Please, fill in all fields.")
    }
    }
return(
    <Box
    component="form"
    autoComplete="off"
    onSubmit={(e) => onSubmit(e)}
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    gap={2.5}
    >
    <TextField
        required
        label={`Title of ${variant}`}
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
        variant="standard"
    />
    <TextField
        required
        label={`Amount of ${variant}`}
        onChange={(e)=> setAmount(Number(e.target.value))}
        type="number"
        InputLabelProps={{shrink: true,}}
        value={amount}
        variant="standard"
    />
    <TextField
        required
        label= {`Date of ${variant}`}
        onChange={(e)=> setDate(e.target.value)}
        type="date"
        InputLabelProps={{shrink: true,}}
        value={date}
        variant="standard"
    />
    <Button 
        type="submit"
        variant="outlined"
        startIcon={<SaveAltOutlinedIcon/>}
        color="primary"
        size="medium"
        className="save-btn">
            Save
    </Button>
    <StateList list={list}
    /> 
    </Box>
);
}

export default Money