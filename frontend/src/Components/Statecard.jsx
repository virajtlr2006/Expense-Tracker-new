import { Wallet } from 'lucide-react'
import React from 'react'

const Statecard = ({ name, value, icon }) => {
    return (

        <div className=' h-20 w-50  grid grid-cols-12 mt-10 border-2 w-1/ rounded-xl text-white  '>
            <div className='flex items-center bg-amber-700 col-span-3 justify-center'>{icon}</div>
            <div className='flex justify-center gap-1 flex-col bg-green-900 col-span-9 px-4'><p>{name}</p>
                <p>{value}</p></div>
        </div>
    )
}

export default Statecard
