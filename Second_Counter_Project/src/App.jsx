import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  // let counter = 15; 
  let [counter, setCounter] = useState(1)

  const addValue = () => {
    console.log("cliked",counter); 
    // counter += 1; 
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>Asif Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick = {counter}
      >Add value</button>
      <br></br>
      <button>remove value</button>
    </>
  )
}

export default App
