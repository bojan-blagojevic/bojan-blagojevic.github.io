import { useControls } from 'leva'

export default function Placeholder(props) {
    const { position, rotation } = useControls({
        position: {
            value: 0,
            step: 0.2
        },
        rotation: {
            value: { x: 0, y: 0, z: 0 },
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20
        }
    })

    return <group
        rotation-x={rotation.x}
        rotation-y={rotation.y}
        rotation-z={rotation.z}
    >
        <mesh {...props}
            position-x={-1}
            position-y={-1}
            position-z={-1}
        >
            <boxGeometry />
            <meshBasicMaterial wireframe color="red" />
        </mesh>
    </group>
}