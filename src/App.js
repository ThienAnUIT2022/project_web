import Home from "./pages/Home";
import Login from "./pages/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Profile />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
