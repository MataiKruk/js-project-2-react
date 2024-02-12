import { useState } from "react";
import Layer from "./Layer";
import CakeBuilder from "./CakeBuilder/CakeBuilder";
import "./App.css";

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

  const [layers, setLayers] = useState<Layer[]>(layerArr);

  // const [layers, setLayers] = useState <Layer[]>();

  const deleteLayer = (index: number) => {
    const updatedLayers = [...layers];
    updatedLayers.splice(index, 1);
    setLayers(updatedLayers);
  };
  const addLayer = (layer: Layer) => {
    setLayers([...layers, layer]);
  };

  return (
    <>
      <CakeBuilder
        addLayer={addLayer}
        layers={layers}
        deleteLayer={deleteLayer}
      />
    </>
  );
}

export default App;

//Sarah's App.tsx (didn't want to mess up)

// const App: React.FC = () => {
//   const [cakeLayers, setCakeLayers] = useState<string[]>([
//     'layer1',
//     'layer2',
//     'layer3',
//   ]);

//   return (
//     <div className="app-container">
//             <CakeBuilder/>
//       <header className="app-header">Cake Builder App</header>
//       <main className="app-main">
//         <div className="cake-container">
//           {cakeLayers.map((layer, index) => (
//             <div key={index} className="cake-layer">
//               {layer}
//             </div>
//           ))}
//     </div>
//   </main>
//   <footer className="app-footer">2024 Cake Layer Builder Inc.</footer>
//   </div>
//   );
// };
