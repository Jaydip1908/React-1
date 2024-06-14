import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Addition from './Addition'
import StateFull from './StateFull'
import StateLess from './StateLess'
import Clcfunction from './Clcfunction'

function App() {
  const [count, setCount] = useState(0)

  return (

<>
      <Addition/>
      <Counter />
      <StateFull />
      <StateLess />
      <Clcfunction/>
    </> 
  )
}


export default App
