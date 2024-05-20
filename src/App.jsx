import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LogInPage from "./components/LogInPage.jsx";
import Welcome from "./components/Welcome.jsx";
import Level1 from "./components/Level1.jsx";
import Level2 from "./components/Level2.jsx";
import UnityInstruction from "./components/UnityInstruction.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarlogout from "./components/NavBarlogout.jsx";
import NavBar from "./components/NavBar.jsx";
function App() {
  return (
    <>
      <div className="bg-secondary App">
        <Router>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="/UnityInstruction" element={<NavBar />} />
            <Route path="/Welcome" element={<NavBarlogout />} />
            <Route path="/Level1" element={<NavBarlogout />} />
            <Route path="/Level2" element={<NavBarlogout />} />
          </Routes>
        </Router>
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<LogInPage />} />
              <Route path="/Welcome" element={<Welcome />} />
              <Route path="/Level1" element={<Level1 />} />
              <Route path="/Level2" element={<Level2 />} />
              <Route path="/UnityInstruction" element={<UnityInstruction />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
