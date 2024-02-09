import "./CakeBuilder.css";

interface LayerAddProps {
    toggleForm: () => void;
}

const LayerAdd = ({toggleForm} : LayerAddProps) => {
    return (
      <div className="layerAdd">
        <button onClick={toggleForm}>Add A layer</button>
      </div>
    );
  };

export default LayerAdd;