import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './Count'
import Header from './Header'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Count/>
      <Footer/>
    </>
  )
}

export default App
