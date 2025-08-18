import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const UpdateHistory = () => {

  const [amount, setAmount] = useState("")
  const [expense, setExpense] = useState("")
  const [to, setto] = useState("")
  const [type, setType] = useState("")
  const {id} = useParams()

  useEffect(() => {
    getTransaction()
  }, [])
  

  const getTransaction = async () => {
    const singlelist = await axios.get(`http://localhost:8080/transaction/singlelist/${id}`)
      console.log(singlelist.data.allTransactions);
      setAmount(singlelist.data.allTransactions.amount)
      setExpense(singlelist.data.allTransactions.expense)
      setto(singlelist.data.allTransactions.to)
      setType(singlelist.data.allTransactions.type)

  }
  

  const Update = async () => {
    const updatedTransaction = await axios.post("http://localhost:8080/transaction/history/update",{
      id,
        to,
        type,
        expense,
        amount
    })
    navigate("/list")
    
    console.log(updatedTransaction);
    
  }

  const navigate = useNavigate()
  return (
    <div>
      <input type="text" placeholder='amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
      <input type="text" placeholder='expense' value={expense} onChange={(e)=> setExpense(e.target.value)} />
      <input type="text" placeholder='to' value={to} onChange={(e)=> setto(e.target.value)}/>
      <input type="text" placeholder='type' value={type} onChange={(e)=> setType(e.target.value)}/>
      <button onClick={Update}>click me</button>
    </div>
  )
}

export default UpdateHistory
