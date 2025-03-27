import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Stereometry</h1>
      <p style={styles.text}>Изучайте 3D-фигуры с интерактивной визуализацией!</p>
      <button style={styles.button} onClick={() => navigate("/select")}>Начать</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "20%" },
  title: { fontSize: "3rem", fontWeight: "bold" },
  text: { fontSize: "1.2rem", marginBottom: "20px" },
  button: { padding: "10px 20px", fontSize: "1rem", cursor: "pointer" },
};

export default Welcome;
