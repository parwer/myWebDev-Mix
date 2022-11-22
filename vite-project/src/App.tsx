import './App.css'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { Counter } from './components/class/Counter'
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RendomNumber'
import { Toast } from './components/templateliteral/Toast'

function App() {


  return (
    <div className="App">
      <RandomNumber
        value={10} 
        isPositive
      />
      <Toast position='center'/>
    </div>
  )
}

export default App
