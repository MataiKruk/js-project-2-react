import "./CakeBuilder.css";
import Layer from "../Layer";

interface LayerBuilderProps {
    layers: Layer[];
    deleteLayer: (index: number) => void;
}

const LayerBuilder = ({ layers, deleteLayer }: LayerBuilderProps) => {
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

  export default LayerBuilder;