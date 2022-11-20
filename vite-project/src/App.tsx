import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'

function App() {
  const personName = {
    first: 'bruce',
    last: 'wayne',
  }

  return (
    <div className="App">
      <Greet name="Parwer" messageCount={20} isLogIn={true}/>
      <Person name={personName}/>
    </div>
  )
}

export default App
