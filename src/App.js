import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SelectFigure from "./pages/SelectFigure";
import Cube from "./pages/Cube";
import Sphere from "./pages/Sphere";
import Pyramid from "./pages/Pyramid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/select" element={<SelectFigure />} />
        <Route path="/cube" element={<Cube />} />
        <Route path="/sphere" element={<Sphere />} />
        <Route path="/pyramid" element={<Pyramid />} />
      </Routes>
    </Router>
  );
}

export default App;

