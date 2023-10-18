import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fatwa from "./pages/Fatwa";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fatwa" element={<Fatwa />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
