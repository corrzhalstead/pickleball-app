import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
