import './App.css'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { Counter } from './components/class/Counter'
import { List } from './components/generics/List'
import { CustomButton } from './components/html/Button'
import { Input } from './components/html/Input'
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
      <CustomButton variant='primary' onClick={() => {console.log('Clicked')}}>
        PropTypes
      </CustomButton>

      <Input type='password'/>
    </div>
  )
}

export default App
