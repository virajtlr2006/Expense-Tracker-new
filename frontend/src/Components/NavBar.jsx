import { CircleDollarSignIcon, LogInIcon, User } from 'lucide-react'
import React from 'react'
import { LinkArray } from '..'
import Link from './Link'

const NavBar = () => {
  return (
    // Main div of navbar 1173-60  sm-5
    <div className='sticky flex justify-between px-20 gap-5 bg-emerald-600  h-10 py-1.5 z-0 border-0 animate-gradie  '>
      {/*Symbol and title  */}
      <div className='flex gap-2'>
        < CircleDollarSignIcon className='text-slate-800 ml-2' />
        <p className='text-white hover:text-emerald-900'>Expense Tracker</p>
      </div>

      {/* Home, About,Feature */}
      <div className="flex gap-5  ">
        {LinkArray.map((list) => {
          return <Link href={list.href} label={list.label} />
        })}
      </div>

      {/* SignUp and Sign In button */}
      <div className=' flex gap-5'>
        <button className=' flex gap-2 text-white hover:text-emerald-900'>
          <User className='text-slate-800 ' />
          Sign Up
        </button>
        <button className=' flex gap-2 text-white hover:text-emerald-900 '>
          <LogInIcon className='text-slate-800 ' />
          <p className=''>Log In</p>
          </button>
      </div>
    </div>
  )
}

export default NavBar
