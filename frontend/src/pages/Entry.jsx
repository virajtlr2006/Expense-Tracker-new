import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Entry = () => {

    const navigate = useNavigate()
    const [to, setto] = useState("")
    const [type, setType] = useState("")
    const [expense, setExpense] = useState("")
    const [amount, setAmount] = useState("")


    const newEntry = async () => {
        // const {from,to,type,expense,amount} = req.body
        const email = localStorage.getItem("email")
        const entry = await axios.post("http://localhost:8080/transaction/entry",{
            email,
            to,
            type,
            expense,
            amount
        }) 

        
        if (entry.data.message == "Successful Entry"){
            alert("Entry Successful")
            navigate("/")
            console.log(entry.data);
            
        }
        else{
            alert("Entry Unsuccessful")
        }
    }
    return (
        <div>
            <input type="text" placeholder='to' onChange={(e)=>setto(e.target.value)}/>
            <input type="text" placeholder='type' onChange={(e)=>setType(e.target.value)}/>
            <input type="text" placeholder='expense' onChange={(e)=>setExpense(e.target.value)}/>
            <input type="text" placeholder='amount' onChange={(e)=>setAmount(e.target.value)}/>
            <button onClick={newEntry}>Add to tracker</button>
        </div>
    )
}

export default Entry
