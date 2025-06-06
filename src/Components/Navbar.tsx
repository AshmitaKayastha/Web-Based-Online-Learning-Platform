import { Link, useNavigate } from "react-router-dom";
import { clearActiveUser, getActiveUser } from "../LocalStorage";
import "../login.css"; 

const Navbar = () => {
  const navigate = useNavigate();
  const user = getActiveUser();

  const handleLogout = () => {
    clearActiveUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">KnowHow</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user && <Link to="/courses">Courses</Link>}
        {!user ? <Link to="/login">Login</Link> : <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;
