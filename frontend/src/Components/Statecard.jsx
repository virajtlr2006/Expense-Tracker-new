import { Wallet } from 'lucide-react'
import React from 'react'

const Statecard = ({ name, value, icon }) => {
    return (

        <div className='border-1 h-20 w-50  grid grid-cols-12 '>
            <div className='flex items-center bg-amber-700 col-span-2 justify-center'>{icon}</div>
            <div className='flex justify-center gap-1 flex-col bg-green-900 col-span-10 '><p>{name}</p>
                <p>{value}</p></div>
        </div>
    )
}

export default Statecard
