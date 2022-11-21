import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'

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
      <Status status='asd'/>
      <Heading>1234</Heading>
      <Oscar>
        <Heading>123</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {console.log(1234)}}/>

    </div>
  )
}

export default App
