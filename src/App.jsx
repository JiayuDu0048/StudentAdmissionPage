import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar.jsx";
import Welcome from "./components/Welcome.jsx";
import Level1 from "./components/Level1.jsx";
import Level2 from "./components/Level2.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="bg-secondary">
        <NavBar />
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/Level1" element={<Level1 />} />
              <Route path="/Level2" element={<Level2 />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
