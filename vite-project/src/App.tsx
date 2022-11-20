import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'

function App() {
  const personName = {
    first: 'bruce',
    last: 'wayne',
  }

  const nameList = [
    {first: "Bruce", last: "Wayne"},
    {first: "Clark", last: "Kent"},
    {first: "Princes", last: "Diana"},
]

  return (
    <div className="App">
      <Greet name="Parwer" messageCount={20} isLogIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  )
}

export default App
