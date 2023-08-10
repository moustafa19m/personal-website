import { useState } from 'react'
import reactLogo from './assets/react.svg'
import myLogo from '/favicon.svg'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
