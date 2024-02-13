import React from 'react';
import Layer from '../Layer';

interface CakeLayerProps {
  layer: Layer;
}

const CakeLayer: React.FC<CakeLayerProps> = ({ layer }) => {

  const style = {
    height: `${layer.height * 10}px`, 
    width: `${layer.width * 8}vw`, 
    backgroundColor: layer.color,
    border: '1px solid #000', 
    margin: '0 auto', 
  };

  return <div style={style}></div>;
};

export default CakeLayer;