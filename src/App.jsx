import { GlobalProvider } from "./context/GlobalState";

//components
import Transaction from "./components/Transaction";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";


const App = () => {
  return (
    <GlobalProvider>
      
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="contanier mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
          <div>
            <h2 className="font-bold text-2xl">Expense Tracker</h2>
            <IncomeExpenses />
            <Balance />
            <Transaction /> 
          </div>
          <div className="w-full flex flex-col flex-1">

              <ExpenseChart />
              <TransactionList />
          </div>
        </div>
        </div>
      
    </div>
    
      
      
    </GlobalProvider>
  );
}

export default App;
