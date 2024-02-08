import { useState } from 'react'
import CakeBuilder from './CakeBuilder/CakeBuilder'

function App() {
  const [count, setCount] = useState()

  return (
    <>
      <CakeBuilder/>
    </>
  )
}

export default App
