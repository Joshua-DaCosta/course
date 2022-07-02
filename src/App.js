import "./App.css";
import expensesData from "./data/expenses";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  return (
    <div className="app">
      <NewExpense />
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;
