import { useState } from 'react'
import Layer from './Layer';
import CakeBuilder from './CakeBuilder/CakeBuilder'

function App() {

  //example array, will eventually start with empty array
  const layerArr: Layer[] = [
    {
      height: 9,
      width: 5,
      color: "brown",
    },

    {
      height: 4,
      width: 3,
      color: "chocolate",
    },

    {
      height: 4,
      width: 3,
      color: "brown",
    },
  ];

  const [layers, setLayers] = useState <Layer[]>(layerArr);

  // const [layers, setLayers] = useState <Layer[]>();
  
  const deleteLayer = (index: number) => {
    const updatedLayers = [...layers];
    updatedLayers.splice(index, 1);
    setLayers(updatedLayers);
  };

  return (
    <>
      <CakeBuilder layers={layers} deleteLayer={deleteLayer}/>
    </>
  )
}

export default App;