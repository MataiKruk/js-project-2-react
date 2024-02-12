import Layer from "../Layer";
import CakeLayer from "./CakeLayer";

interface LayerProps{
    layers: Layer[]
}

const Cake = ({layers}: LayerProps) => {

    return (
        <div>
            {layers.map((layer, index) => (
                <CakeLayer key={index} layer={layer}></CakeLayer>
            ))}
        </div>
    )
}

export default Cake;
