import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cube = () => {
  const [size, setSize] = useState(2);
  const [color, setColor] = useState("blue"); // Цвет для заливки
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [scaleZ, setScaleZ] = useState(1);
  const [isWireframe, setIsWireframe] = useState(false); // Состояние для переключения между заливкой и гранями

  const volume = Math.pow(size, 3).toFixed(2);
  const area = (6 * Math.pow(size, 2)).toFixed(2);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Куб</h1>
      <Canvas style={{ height: "400px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />

        {/* Куб с возможностью переключения между заливкой и отображением только граней */}
        <mesh scale={[scaleX, scaleY, scaleZ]}>
          <boxGeometry args={[size, size, size]} />
          <meshStandardMaterial
            color={color}
            wireframe={isWireframe}  // Включаем или выключаем отображение граней в зависимости от состояния
          />
        </mesh>
      </Canvas>

      <div>
        <label>Размер ребра (1-5 см): {size} см</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
        <p>Формула объема: V = a³</p>
        <p>Объем: {volume} см³</p>
        <p>Формула площади: S = 6a²</p>
        <p>Площадь: {area} см²</p>

        <label>Цвет заливки:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}  // Изменяем цвет заливки
        />

        <label>Масштаб по оси X:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={scaleX}
          onChange={(e) => setScaleX(Number(e.target.value))}
        />
        <label>Масштаб по оси Y:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={scaleY}
          onChange={(e) => setScaleY(Number(e.target.value))}
        />
        <label>Масштаб по оси Z:</label>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={scaleZ}
          onChange={(e) => setScaleZ(Number(e.target.value))}
        />

        <br />
        {/* Переключатель между заливкой и отображением только граней */}
        <button onClick={() => setIsWireframe(!isWireframe)}>
          {isWireframe ? "Показать заливку" : "Показать только грани"}
        </button>
      </div>
    </div>
  );
};

export default Cube;
