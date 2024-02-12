import "./CakeBuilder.css";
import Layer from "../Layer";

interface LayerFormProps {
    setLayers: (layers: Layer[]) => void,
    layers: Layer[],
    toggleForm: () => void;
}



const LayerForm = ( {layers, toggleForm} : LayerFormProps) => {
    return (
    <div>
      <p>ADD FORM HERE</p>
      <button>Submit</button>
      <button onClick={toggleForm}>Cancel</button>
    </div>
  )};

  export default LayerForm;

// Needs:
//   - a functioning form that allows you to add a layer with a provided
//   color, height, and width 
//   (give a basic list of colors to choose from with a drop down list)  
//   - submit button should add the form to the Array
