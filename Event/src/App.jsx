import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Condition from './Condition'
import ToggleButton from './ToggleButton'
import Onchange from './On'
import ArrayObj from './ArrayObj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArrayObj/>
      <Condition/>
      <Onchange/>
      <ToggleButton/>
    </>
  )
}

export default App
