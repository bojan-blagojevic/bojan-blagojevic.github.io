import React, { useState } from "react";
import { useControls } from "leva";
import Cubie from "./Cubie";
import { Html } from "@react-three/drei";

export default function Cube() {

    const [cubieStates, setCubieStates] = useState(() => {
        const initialState = init();
        return initialState;
    });

    function init() {
        const cs = [];
        let i = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    cs.push({
                        id: i++,
                        selected: false,
                        x: x,
                        y: y,
                        z: z,
                        rotation: 0
                    });
                }
            }
        }
        return cs;
    }

    function handleClick(event, i) {
        const nextCubies = cubieStates.map(cubie => {
            if (cubie.id === i) {
                console.log("Cubie:" + cubie.id + " sel:" + !cubie.selected)
                return {
                    id: cubie.id,
                    selected: !cubie.selected,
                    x: cubie.x,
                    y: cubie.y,
                    z: cubie.z,
                    rotation: cubie.rotation
                }
            } else {
                return cubie;
            }
        })
        setCubieStates(nextCubies);
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

    
    



    return <group dispose={null}>
        {Object.values(cubieStates).map((cubie) => (
            <Cubie
                x={cubie.x}
                y={cubie.y}
                z={cubie.z}
                rotation={cubie.rotation}
                id = {cubie.id}
                key={cubie.id}
                onCubieClicked={(event) => handleClick(event, cubie.id)}
                selected={cubie.selected}
            />
        ))}
        <Html>
            <button onClick={() => console.log('front')}>Rotate Front</button>
        </Html>
    </group>

}