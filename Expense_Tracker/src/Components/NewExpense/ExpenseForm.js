import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const[enteredTitle, setenteredTitle] = useState("");
    const[enteredAmount, setenteredAmount] = useState("");
    const[enteredDate, setenteredDate] = useState("");

    const titleChangeHandler =(event) =>{
        setenteredTitle(event.target.value);
    };

    const amountChangeHandler =(event) =>{
        setenteredAmount(event.target.value);
    };

    const datehangeHandler =(event) =>{
        setenteredDate(event.target.value);
    };

    const submitHandler =(event) =>{
        event.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        setenteredAmount("");
        setenteredTitle("");
        setenteredDate("");
        props.onSaveExpenseData(expenseData);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type ="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type ="number" min="10" step="1" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type ="date" value={enteredDate} onChange={datehangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;