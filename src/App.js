import './App.css';
import ExpenseItem from './components/ExpenseItem';
import expenses from './data/expenses';

function App() {

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {expenses.map(({id, title, amount, date}) => {
      return <ExpenseItem key={id} date={date} title={title} amount={amount} />;
      })}
      
    </div>
  );
}

export default App;
