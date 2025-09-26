import { useState } from 'react'
import './App.css'
import Cats from './components/Cats'
import Context from './components/Context'
import PropDrilling from './components/PropdDrilling'

function App() {
  const [count, setCount] = useState(0)

  return( <>
 <Cats/>
 Kontekst näide:
  <Context/>
  Propdrill Näide

 </>
  )
}

export default App
