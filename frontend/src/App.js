import "./App.css";
import Nav2 from "./components/Layouts/Navbar/Navbar"
import {Routes,Route,Outlet,useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from './components/Signup/Signup'
function App() {
  const location = useLocation();
  const isLoginPageOrSignup = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
      {/* Render Nav2 only if it's not the login or signup page */}
      {!isLoginPageOrSignup && <Nav2 />}
      <Outlet /> {/* Outlet to render nested routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
