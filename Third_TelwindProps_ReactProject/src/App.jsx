import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './componet/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName = "asif",
    age: 18
  }

  return (
    <>
     <Card channel = "chau aur code" someObj ={myObj}/>
     <br></br>
     <Card/>
    </>
  )
}

export default App
