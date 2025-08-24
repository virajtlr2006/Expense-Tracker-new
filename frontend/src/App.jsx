import React from 'react'
import NavBar from './Components/NavBar'
import Dashboard from './Components/Dashboard'
import Workflow from './Components/Workflow'
import FewEntry from './Components/FewEntry'

const App = () => {
  return (
    <div className='bg-gray-800 '>
      <NavBar/>
      <Dashboard/>
      <Workflow/>
      <FewEntry/>
    </div>
  )
}

export default App
