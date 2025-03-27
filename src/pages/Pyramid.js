import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Pyramid = () => {
  const [base, setBase] = useState(2);
  const [height, setHeight] = useState(3);
  const [color, setColor] = useState("yellow");
  const [isWireframe, setIsWireframe] = useState(false);

  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);

  const volume = ((1 / 3) * Math.pow(base, 2) * height).toFixed(2);
  const slantHeight = Math.sqrt((base / 2) ** 2 + height ** 2).toFixed(2);
  const area = (Math.pow(base, 2) + 2 * base * slantHeight).toFixed(2);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Пирамида</h1>
      <Canvas style={{ height: "400px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        <mesh scale={[scaleX, scaleY, scaleZ]}>
          <coneGeometry args={[base, height, 4]} />
          <meshStandardMaterial color={color} wireframe={isWireframe} />
        </mesh>
      </Canvas>

      <div>
        <label>Сторона основания (1-5 см): {base} см</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={base}
          onChange={(e) => setBase(Number(e.target.value))}
        />
        <label>Высота (1-5 см): {height} см</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />

        <p>Формула объема: V = (1/3) a²h</p>
        <p>Объем: {volume} см³</p>
        <p>Формула площади: S = a² + 2a * h₀</p>
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

export default Pyramid;
