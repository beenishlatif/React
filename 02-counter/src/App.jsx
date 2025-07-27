import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase=()=>{
    if(count<20)
  setCount(count+1)
  }
  const decrease=()=>{
    if(count>0)
    setCount(count-1)
  }

  return (
    <>
     <h1>counter:{count}</h1>
     <button onClick={increase}>Increase</button>
     <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
