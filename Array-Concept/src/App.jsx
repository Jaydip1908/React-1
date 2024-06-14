import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Area from './Area'
import CheckElement from './CheckElement'
import Display from './Display'
import Fruit from './Fruit'
import Information from './Information'
import LeapYear from './LeapYear'
import Merge from './Merge'
import Sum from './Sum'

function App() {
  const [count, setCount] = useState(0)

return (
  <>
    <Area />
    <square />
    <CheckElement />
    <Display />
    {/* <EvenOdd /> */}
    <Fruit />
    <information />
    <LeapYear />
    <Merge />
    <Sum />

  </>
)
}


export default App
