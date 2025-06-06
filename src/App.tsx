import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Courses from "./Components/Courses/PrivateRoute";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getActiveUser } from "./LocalStorage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="courses" element={<Courses />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Navbar + Wrapper
const Layout = () => (
  <>
    {/* Navbar Component here (or inside Home.tsx if reused) */}
    <Outlet />
  </>
);

// Private route wrapper
const PrivateRoute = () => {
  const activeUser = getActiveUser();
  return activeUser ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
