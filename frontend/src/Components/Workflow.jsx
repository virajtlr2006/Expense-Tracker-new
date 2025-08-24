import React from 'react'

const Workflow = () => {
  return (
    <div className='  mt-15   '>

      <div className='flex justify-end mr-15'>

        <div className=' flex mr-60 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 to-emerald-800 px-10'>
          <p className='h-1 text-5xl text-white text-transparent '>Your Transactions</p>
        </div>


        <div className='flex mr-10 border-4 rounded-2xl border-emerald-600 overflow-hidden '>
          <input type="search" placeholder='Search your transaction' className='h-12 w-60 text-white placeholder:text-white pl-9' />
        </div>


        <div>
          <button className='border-4 p-2 bg-gradient-to-r from-emerald-600 to-blue-950 rounded-2xl ' >Add Expense</button>
        </div>

      </div>

    </div>
  )
}

export default Workflow

