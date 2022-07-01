import './App.css';
import expensesData from './data/expenses';
import Expenses from './components/expenses/Expenses';


function App() {

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
        <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;
