import React from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';


const NewExpense = (props) =>{
    const saveExpenseDataHandler =(enteredExpenseData) =>{
        console.log(enteredExpenseData);

        const exepenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onaddExpense(exepenseData);
        console.log(exepenseData);
    }

    
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;