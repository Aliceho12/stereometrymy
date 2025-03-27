import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Sphere = () => {
  const [radius, setRadius] = useState(2);
  const [color, setColor] = useState("red");
  const [isWireframe, setIsWireframe] = useState(false);

  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);

  const volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2);
  const area = (4 * Math.PI * Math.pow(radius, 2)).toFixed(2);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Сфера</h1>
      <Canvas style={{ height: "400px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        <mesh scale={[scaleX, scaleY, scaleZ]}>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial color={color} wireframe={isWireframe} />
        </mesh>
      </Canvas>

      <div>
        <label>Радиус (1-5 см): {radius} см</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
        />
        <p>Формула объема: V = (4/3)πr³</p>
        <p>Объем: {volume} см³</p>
        <p>Формула площади: S = 4πr²</p>
        <p>Площадь: {area} см²</p>

        <label>Цвет заливки:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

        {/* Масштабирование */}
        <label>Масштаб по X:</label>
        <input type="range" min="0.5" max="2" step="0.1" value={scaleX} onChange={(e) => setScaleX(Number(e.target.value))} />
        <label>Масштаб по Y:</label>
        <input type="range" min="0.5" max="2" step="0.1" value={scaleY} onChange={(e) => setScaleY(Number(e.target.value))} />
        <label>Масштаб по Z:</label>
        <input type="range" min="0.5" max="2" step="0.1" value={scaleZ} onChange={(e) => setScaleZ(Number(e.target.value))} />

        <br />
        <button onClick={() => setIsWireframe(!isWireframe)}>
          {isWireframe ? "Показать заливку" : "Показать только грани"}
        </button>
      </div>
    </div>
  );
};

export default Sphere;
