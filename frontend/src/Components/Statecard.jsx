import { Wallet } from 'lucide-react'
import React from 'react'

const Statecard = ({ name, value, icon }) => {
    return (

        <div className='border-4 rounded-xl h-20 w-50  grid grid-cols-12 mt-8 overflow-hidden '>
            <div className='flex items-center bg-amber-700 col-span-3 justify-center'>{icon}</div>
            <div className='flex justify-center gap-1 flex-col bg-green-900 col-span-9 pl-5 text-white '><p>{name}</p>
                <p>{value}</p></div>
        </div>
    )
}

export default Statecard
