import React from "react";
import { useNavigate } from "react-router-dom";

const SelectFigure = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Выберите фигуру</h1>
      <div style={styles.grid}>
        <button style={styles.button} onClick={() => navigate("/cube")}>Куб</button>
        <button style={styles.button} onClick={() => navigate("/sphere")}>Сфера</button>
        <button style={styles.button} onClick={() => navigate("/pyramid")}>Пирамида</button>
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "10%" },
  grid: { display: "flex", justifyContent: "center", gap: "20px" },
  button: { padding: "10px 20px", fontSize: "1.2rem", cursor: "pointer" },
};

export default SelectFigure;
