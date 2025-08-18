import axios from 'axios'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const SingleEntry = ({list}) => {

const [isenable, setIsenable] = useState(true)
      const deleteTransaction = async () => {
        setIsenable(false)
    const del = await axios.post("http://localhost:8080/transaction/delete",{
        "id":list._id
    })
  }
  const navigate= useNavigate()
  const Update = async () => {
    navigate(`/update/${list._id}`)
  }

  return (
    <div>
      { 
        isenable && 
        <>
      {list.type == "credit"?<Plus />:<Minus />}
            <p>{list.amount}</p>
            <p>{list.type}</p>
            <p>{list.to}</p>
            <p>{list.expense}</p>
            <button onClick={Update}>Update Transaction</button>
            <button onClick={deleteTransaction}>Delete Tranaction</button>
        </>}
    </div>
  )
}

export default SingleEntry
