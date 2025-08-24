import { Wallet } from 'lucide-react'
import React from 'react'

const Statecard = ({ name, value, icon }) => {
    return (

        <div className='border-4 rounded-2xl overflow-hidden h-20 w-50  grid grid-cols-12 shadow-2xl bg-gradient-to-r from-emerald-800 to-blue-950'>
            <div className='flex items-center  col-span-3 justify-center'>{icon}</div>
            <div className=' text-white flex justify-center gap-1 flex-col  col-span-9 pl-6 '><p>{name}</p>
                <p>{value}</p></div>
        </div>
    )
}

export default Statecard
