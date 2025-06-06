import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Courses from "./Components/Courses/PrivateRoute";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getActiveUser } from "./LocalStorage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="courses" element={<Courses />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Layout wrapper with Navbar visible on all pages
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Private route protection
const PrivateRoute = () => {
  const activeUser = getActiveUser();
  return activeUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default App;
