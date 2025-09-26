import { useState } from 'react'
import './App.css'
import Cats from './components/Cats'

function App() {
  const [count, setCount] = useState(0)

  return( <Cats/>

  )
}

export default App
