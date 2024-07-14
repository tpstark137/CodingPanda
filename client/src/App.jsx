import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authenticate/Login/Login";
import Register from "./pages/Authenticate/Register/Register";
import Home from "./pages/Home/Home";
import OtpVerification from "./pages/Authenticate/OtpVerification/OtpVerification";
import Avatar from "./pages/Authenticate/Avatar/Avatar";
import Room from "./pages/Room/Room";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/setup-avatar" element={<Avatar />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
