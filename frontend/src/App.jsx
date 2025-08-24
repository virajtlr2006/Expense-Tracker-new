import React from 'react'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import Workflow from './Components/Workflow'

const App = () => {
  return (
    <div className='bg-gray-800 h-screen'>
      <NavBar/>
      <Dashboard/>
      <Workflow/>
    </div>
  )
}

export default App
