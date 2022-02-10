
import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesDummyData = [
  {
    date: new Date(),
    title:'Car Insurance',
    amount:20.56
  },
  {
    date: new Date(),
    title:'Life Insurance',
    amount:20.56
  },
  {
    date: new Date(),
    title:'New Desk',
    amount:20.56
  },
  {
    date: new Date(),
    title:'Cars',
    amount:20.56
  },
  
]

function App() {
  const [expenses, setExpenses] = useState(expensesDummyData)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };
  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
      </div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;