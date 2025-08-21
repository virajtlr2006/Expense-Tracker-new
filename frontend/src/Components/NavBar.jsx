import { CircleDollarSignIcon, LogInIcon, User } from 'lucide-react'
import React from 'react'
import { LinkArray } from '..'
import Link from './Link'

const NavBar = () => {
  return (
    // Main div of navbar
    <div className='sticky flex gap-85  bg-stone-300 h-10 py-1.5 z-0 border-0 animate-gradie'>
      {/*Symbol and title  */}
      <div className='flex gap-5'>
        < CircleDollarSignIcon className='text-green-700 ml-2' />
        <p className='font-medium hover:font-bold'>Expense Tracker</p>
      </div>

      {/* Home, About,Feature */}
      <div className="flex gap-5 font-medium hover:font-bold hover:underline ">
        {LinkArray.map((list) => {
          return <Link href={list.href} label={list.label} />
        })}
      </div>

      {/* SignUp and Sign In button */}
      <div className=' flex gap-5'>
        <button className=' flex gap-2 font-medium hover:font-bold hover:underline '>
          <User className='text-green-700 ml-2' />
          Sign Up
        </button>
        <button className=' flex font-medium hover:font-bold gap-2 hover:underline '>
          <LogInIcon className='text-green-700 ml-2' />
          Log In</button>
      </div>
    </div>
  )
}

export default NavBar
