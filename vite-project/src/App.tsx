import { useState } from 'react'
import './App.css'
import { Box } from './components/context/Box'
import { ThemeContextProcider } from './components/context/ThemeContext'
import { Counter } from './components/state/Counter'
import { LoggedIn } from './components/state/LoggedIn'
import { User } from './components/state/User'


function App() {


  return (
    <div className="App">
      <Counter/>
      <ThemeContextProcider>
        <Box/>
      </ThemeContextProcider>
    </div>
  )
}

export default App
