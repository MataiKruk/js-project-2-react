import { useState } from "react";
import "./CakeBuilder.css";
import Layer from "../Layer";

interface Props {
  layers: Layer[];
  deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ layers, deleteLayer }: Props) => {
  return (
    <div className="layerBuilder">
      {layers.map((layer, index) => (
        <div className="layerBuilderEntry" key={index}>
          <p>Color:</p>
          <div
            className="layerColorPreview"
            style={{ backgroundColor: layer.color }}
          ></div>
          <div className="layerDimensions">
          <div className="layerWidth">
            <p>Width: {layer.width.toFixed(1)}</p>
            <progress value={layer.width} max={10}/>
            </div>
            <div className="layerHeight">
              <p>Height: {layer.height.toFixed(1)}</p>
              <progress value={layer.height} max={10}/>
          </div>
          </div>
          <button onClick={() => deleteLayer(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const LayerAdd = () => {
  return (
    <div className="layerAdd">
      <button>Add A layer</button>
    </div>
  );
};

const LayerForm = () => {
  return (
  <div>
    <p>FORM HERE</p>
  </div>
)};

const CakeBuilder = () => {
  
  const deleteLayer = (index: number) => {
    const updatedLayers = [...layers];
    updatedLayers.splice(index, 1);
    setLayers(updatedLayers);
  };

  //example array
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

  return (
    <div>
      <LayerForm/>
      <LayerAdd/>
      <LayerBuilder layers={layers} deleteLayer={deleteLayer} />
    </div>
  );
};

export default CakeBuilder;
