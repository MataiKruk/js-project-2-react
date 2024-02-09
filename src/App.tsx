import { useState } from 'react'
import Layer from './Layer';
import CakeBuilder from './CakeBuilder/CakeBuilder'

function App() {
  const [layers, setLayers] = useState<Layer[]>([]);

  return (
    <>
      <CakeBuilder layers={layers}/>
    </>
  )
}

export default App
