
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  return (
    <div>
      <div>
        <h2>Let's get started!</h2>
      </div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;