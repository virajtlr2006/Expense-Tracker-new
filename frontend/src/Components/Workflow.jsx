import { BadgePlus, File } from 'lucide-react'
import React from 'react'

const Workflow = () => {
  return (
    <div className='  mt-20 '>
      <div className='flex items-center'>
        <BadgePlus className='text-green-800 ml-8 h-14 w-14'/>
        <button className='border-4 p-2 bg-gradient-to-r from-emerald-600 to-blue-950 rounded-2xl ml-15'>Add Expense</button>
        <p className='text-xl ml-12 text-transparent bg-gradient-to-r from-white to-emerald-600 bg-clip-text'>Easily add your daily expenses and income with just a few clicks. Stay on top of your budget by tracking every transaction in real time.</p>
      </div>
    </div>
  )
}

export default Workflow
