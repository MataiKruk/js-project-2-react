import { useState } from "react";
import "./CakeBuilder.css";
import Layer from "../Layer";
import LayerForm from "./LayerForm";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";

interface CakeBuilderProps {
  layers: Layer[];
  addLayer: (layer: Layer) => void;
  deleteLayer: (index: number) => void;
}

const CakeBuilder = ({ layers, addLayer, deleteLayer }: CakeBuilderProps) => {
  const [formRevealed, setFormRevealed] = useState(false);

  const toggleForm = () => {
    setFormRevealed((prev) => !prev);
  };

  return (
    <div>
      {formRevealed && (
        <LayerForm
          addLayer={addLayer}
          layers={layers}
          toggleForm={toggleForm}
        />
      )}
      {!formRevealed && <LayerAdd toggleForm={toggleForm} />}
      <LayerBuilder layers={layers} deleteLayer={deleteLayer} />
    </div>
  );
};

export default CakeBuilder;
