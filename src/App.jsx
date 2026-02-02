import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MobileWrapper from "./components/MobileWrapper";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MobileWrapper>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MobileWrapper>
    </BrowserRouter>
  );
}

export default App;
