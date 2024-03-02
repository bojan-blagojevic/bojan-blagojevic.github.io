import { useControls } from "leva";
import { Cubie } from "./Cubie";

export default function Cube() {

    const eventHandler = (event) => {
        console.log(event)
        console.log(cubieState)
        console.log(cubieState.get("x-1"))
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

    function addValue(m, k, v) {
        m.set(k, [...(m.get(k) || []), v]);
    }

    const cubies = []
    const cubieState = new Map()
    // -1
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const k = "" + x + y + z
                const c = <Cubie
                    x={x}
                    y={y}
                    z={z}
                    rotation={rotation}
                    key={k}
                    onCubieClicked={eventHandler}
                />
                addValue(cubieState, "x" + x, c)
                addValue(cubieState, "y" + y, c)
                addValue(cubieState, "z" + z, c)
                cubies.push(c);
            }
        }
    }

    return <group dispose={null}>
        {cubies}
    </group>

}