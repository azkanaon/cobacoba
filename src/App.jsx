import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kevin from "./pages/Kevin";
import Fatwa from "./pages/Fatwa";
import Azka from "./pages/Azka";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kevin" element={<Kevin />}></Route>
          <Route path="/fatwa" element={<Fatwa />}></Route>
          <Route path="/azka" element={<Azka />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
