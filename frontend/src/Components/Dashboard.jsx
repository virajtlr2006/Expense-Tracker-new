import { CreditCard, Minus, Plus, Wallet } from 'lucide-react'
import React from 'react'
import Statecard from './Statecard'

const Dashboard = () => {
  return (
    <div className=' gap-5 justify-between px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

      <Statecard name="Balance" value="28545625" icon={<Wallet />} />
      <Statecard name="Credit" value="28545625" icon={<Plus />} />
      <Statecard name="Debit" value="28545625" icon={<Minus />} />

    </div>
  )
}

export default Dashboard
