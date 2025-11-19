import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export function ThreeBG() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0,0,1] }}>
        <color attach="background" args={["#0f172a"]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  )
}
