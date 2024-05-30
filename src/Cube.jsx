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
                        pos: {
                            x: x,
                            y: y,
                            z: z
                        },
                        x: x,
                        y: y,
                        z: z,
                        rx: 0,
                        ry: 0,
                        rz: 0
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
                    ...cubie,
                    selected: !cubie.selected
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

    const rotateFace = (face) => {
        console.log("Rotating...")
        const rotatedCubies = cubieStates.map((cubie) => {
            if (face === 'front' && cubie.pos.x === 1) {
                return {
                    ...cubie,
                    rx: (cubie.rx + Math.PI / 2),
                };
            }
            if (face === 'back' && cubie.pos.x === -1) {
                return { ...cubie, rx: (cubie.rx + Math.PI / 2) };
            }
            if (face === 'top' && cubie.pos.y === 1) {
                return { ...cubie, ry: (cubie.ry + Math.PI / 2) };
            }
            if (face === 'bottom' && cubie.pos.y === -1) {
                return { ...cubie, ry: (cubie.ry + Math.PI / 2) };
            }
            if (face === 'left' && cubie.pos.z === 1) {
                return { ...cubie, rz: (cubie.rz + Math.PI / 2) };
            }
            if (face === 'right' && cubie.pos.z === -1) {
                return { ...cubie, rz: (cubie.rz + Math.PI / 2) };
            }
            return cubie;
        });
        console.log(rotatedCubies)

        setCubieStates(rotatedCubies);
    };




    return <group dispose={null}>
        {Object.values(cubieStates).map((cubie) => (
            <Cubie
                x={cubie.x}
                y={cubie.y}
                z={cubie.z}
                rx={cubie.rx}
                ry={cubie.ry}
                rz={cubie.rz}
                id={cubie.id}
                key={cubie.id}
                onCubieClicked={(event) => handleClick(event, cubie.id)}
                selected={cubie.selected}
            />
        ))}
        <Html>
            <button onClick={() => rotateFace('front')}>Rotate Front</button>
            <button onClick={() => rotateFace('back')}>Rotate Back</button>
            <button onClick={() => rotateFace('top')}>Rotate Top</button>
            <button onClick={() => rotateFace('bottom')}>Rotate Bottom</button>
            <button onClick={() => rotateFace('left')}>Rotate Left</button>
            <button onClick={() => rotateFace('right')}>Rotate Right</button>
        </Html>
    </group>

}