import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


function App(){
    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2023,10,6)
        },
        {
            id: 'e2',
            title: 'Stationary',
            amount: 100,
            date: new Date(2023,10,5)
        },
        {
            id: 'e3',
            title: 'Food',
            amount: 340,
            date: new Date(2023,10,3)
        },
        {
            id: 'e4',
            title: 'Groceries',
            amount: 290,
            date: new Date(2023,10,1)
        }
    ]
    let expenseDate = new Date(2023,10,7);
    let expenseTitle = "School Fee";
    let expenseAmount = 300;

    const addExpenseHandler =(expense) =>{
        console.log(expense);
    };

    return(
        <div>
            <NewExpense onaddExpense={addExpenseHandler}/> 
            <Expenses item = {expenses} />
        </div>
    );
}

export default App;