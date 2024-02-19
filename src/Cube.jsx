import { useControls } from "leva";
import { Cubie } from "./Cubie";

export default function Cube() {

    const eventHandler = (event) => {
        //console.log(event)
        //console.log(cubies)
        event.stopPropagation()
    }


    const { position, rotation } = useControls({
        position: {
            value: 0,
            step: 0.2
        },
        rotation: {
            value: { x: 0, y: 0, z: 0 },
            min: -Math.PI * 2,
            max: Math.PI * 2,
            step: Math.PI / 20
        }
    })

    const cubies = []
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                cubies.push(
                    <Cubie
                        x={x}
                        y={y}
                        z={z}
                        rotation={rotation}
                        key={"" + x + y + z}
                        onCubieClicked={ eventHandler }
                    />);
            }
        }
    }

    return <group dispose={null}>
        {cubies}
    </group>

}