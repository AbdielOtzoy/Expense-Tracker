import {VictoryPie, VictoryLabel} from "victory";
import { useGlobalContext } from "../context/GlobalState";

function ExpenseChart() {


    const { transactions } = useGlobalContext();
    

    const totalIncome = transactions.filter(transaction => transaction.amount > 0).reduce((acc, item) => (acc += item.amount), 0)
    const totalExpense = transactions.filter(transaction => transaction.amount < 0).reduce((acc, item) => (acc += item.amount), 0) * -1
    
    const totalExpensePercent = Math.round((totalExpense / totalIncome) * 100)
    const totalIncomePercent = 100 - totalExpensePercent;


  return (
      <VictoryPie 
          colorScale={["#e74c3c", "#2ecc71"]}
          data={[
              { x: "Expenses", y: totalExpensePercent },
              { x: "Income", y: totalIncomePercent }
          ]}
          animate={{
              duration: 200
          }}
          labels={({ datum }) => ` ${datum.y}%`}
          labelComponent={<VictoryLabel angle={45} style={{fill: "white"}}/>}
    />
  )
}

export default ExpenseChart