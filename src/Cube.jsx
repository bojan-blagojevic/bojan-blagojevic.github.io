import React, { useState } from "react";
import { useControls } from "leva";
import { Cubie } from "./Cubie";

export default function Cube() {

    const [cubieStates, setCubieStates] = useState(() => {
        const initialState = init();
        return initialState;
    });

    function init() {
        const cs = [];
        for (let index = 0; index < 27; ++index) {
            cs.push({
                id: index,
                selected: false
            });
        }
        return cs;
    }

    function handleClick(event, i) {
        const nextCubies = cubieStates.map(cubie => {
            if (cubie.id === i) {
                return { 
                    id: cubie.id,
                    selected: !cubie.selected
                }
            } else {
                return cubie;
            }
        })
        setCubieStates(nextCubies);
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
    let i = 0
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const k = "" + x + y + z
                const ii = i++
                console.log("Draw cubie:" + ii + " sel:" + cubieStates[ii].selected)
                const c = <Cubie
                    x={x}
                    y={y}
                    z={z}
                    rotation={rotation}
                    key={ii}
                    onCubieClicked={(event) => handleClick(event, ii)}
                    selected={cubieStates[ii].selected}
                />
                cubies.push(c);
            }
        }
    }

    return <group dispose={null}>
        {cubies}
    </group>

}