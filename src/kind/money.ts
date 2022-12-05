export interface MoneyItem{
    title: string,
    amount: number,
    date: string,
    id: number
}

export interface MoneyProp{
    variant: "Incomes" | "Expences",
    list: MoneyItem[],
    setList: React.Dispatch<React.SetStateAction<MoneyItem[]>>
}