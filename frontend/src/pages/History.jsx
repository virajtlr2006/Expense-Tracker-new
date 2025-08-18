import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Minus, Plus } from 'lucide-react';
import { useEffect } from 'react';
import SingleEntry from './SingleEntry';

const History = () => {

  const [ListTransaction, setLisTransaction] = useState(null)

  useEffect(() => {
    history()
  }, [])

  const history = async () => {
    const email = localStorage.getItem("email")
    // console.log(email)
    const Transactions = await axios.get(`http://localhost:8080/transaction/list/${email}`)

    setLisTransaction(Transactions.data.allTransactions)
    console.log(Transactions)
  }

  const navigate = useNavigate()
  const UpdateEntry = async () => {
    navigate("/update")
  }

  const deleteTransaction = async (id) => {
    const del = await axios.delete(`http://localhost:8080/transaction/delete/${id}`)
  }

  return (
    <div>
      {ListTransaction && ListTransaction.map((list) => 
         <SingleEntry list={list} />
      )}
    </div>
  )
}

export default History
