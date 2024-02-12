import React, { useState } from "react";
import "./CakeBuilder.css";
import Layer from "../Layer"; // Assuming Layer is a TypeScript type or interface

interface LayerFormProps {
  layers: Layer[];
  addLayer: (newLayer: Layer) => void; // Function to add a new layer
  toggleForm: () => void;
}

const LayerForm = ({ layers, addLayer, toggleForm }: LayerFormProps) => {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newLayer: Layer = { color, width, height };
    addLayer(newLayer);
  };

  return (
    <div className="form-container">
      <form className="form-custom" onSubmit={handleSubmit}>
        <label className="form-label">
          Color:
          <select
            className="form-select"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>
          </select>
        </label>
        <br />
        <label className="form-range">
          Width:
          <input
            className="form-range-value"
            type="range"
            min="0"
            max="20"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
          {width}
        </label>
        <br />
        <label className="form-range">
          Height:
          <input
            className="form-range-value"
            type="range"
            min="0"
            max="20"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
          {height}
        </label>
        <br />
        <button className="form-btn" type="submit">
          Save
        </button>
        <button className="form-btn" type="button" onClick={toggleForm}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default LayerForm;

// Needs:
//   - a functioning form that allows you to add a layer with a provided
//   color, height, and width
//   (give a basic list of colors to choose from with a drop down list)
//   - submit button should add the form to the Array
