import { useGlobalContext } from "../context/GlobalState"



function Balance() {

  const { transactions } = useGlobalContext();
  
  
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <div className="flex justify-between">
      <h3>Your Balance</h3>
      <h1 className="text-2xl font-bold">${total.toFixed(2)}</h1>
      
      </div>
  )
}

export default Balance