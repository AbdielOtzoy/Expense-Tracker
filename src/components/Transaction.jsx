import { useState } from "react";
import { useGlobalContext } from "../context/GlobalState";

function Transaction() {

  const { addTransaction, transactions } = useGlobalContext();

  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  const onSubmit = (e) => {
    transactions.length !== 0 && e.preventDefault();

    addTransaction({
      id: window.crypto.getRandomValues(new Uint32Array(1))[0],
      description,
      amount: +amount 
    });
    setAmount(0);
    setDescription("");
  }


  return (
    <div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a description" 
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          step={0.01}
          placeholder="Enter a transaction amount" 
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />

        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Add Transaction</button>
      </form>
    </div>
  )
}

export default Transaction