import { useState } from 'react'
import './App.css'
import UserCount from './components/UserCount'

function App() {
  const [flag, setFlag] = useState(true)
  console.log("App components rendered")

  return (
    <>
      <div>Hello, Good {flag ? "Morning!" : "Afternoon!"}</div>
      <button onClick={() => setFlag(!flag)}>Toggle Message</button>
      <UserCount></UserCount>
    </>
  )
}

export default App
