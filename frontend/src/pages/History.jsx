import React, { useState } from 'react'
import axios from 'axios'
import { Minus, Plus } from 'lucide-react';


const History = () => {

  const [ListTransaction, setLisTransaction] = useState(null)


  const history = async () => {
    const email = localStorage.getItem("email")
    // console.log(email)
    const Transactions = await axios.get(`http://localhost:8080/transaction/list/${email}`)
    console.log(Transactions.data.allTransactions);

    setLisTransaction(Transactions.data.allTransactions)
  }
  return (
    <div>
      <button onClick={history}>Show Transaction History</button>

      {ListTransaction && ListTransaction.map((list) => {
        
        if (list.type == "credit") {

          return <>
            <Plus/>
            <p>{list.amount}</p>
            <p>{list.type}</p>
            <p>{list.to}</p>
            <p>{list.expense}</p>
          </>
        }

                if (list.type == "debit") {

          return <>
            <Minus/>
            <p>{list.amount}</p>
            <p>{list.type}</p>
            <p>{list.to}</p>
            <p>{list.expense}</p>
          </>
        }
      })}
    </div>
  )
}

export default History
