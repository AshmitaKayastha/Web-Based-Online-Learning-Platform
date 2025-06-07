import { Link, useNavigate, useLocation } from "react-router-dom";
import { clearActiveUser, getActiveUser } from "../LocalStorage";
import "../navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getActiveUser();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    clearActiveUser();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path ? "nav-item active" : "nav-item";

  return (
    <nav className="navbar sticky-navbar">
      <div className="logo">E-Learning</div>
      <div className="nav-links">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/about" className={isActive("/about")}>About</Link>
        {user && <Link to="/courses" className={isActive("/courses")}>Courses</Link>}
        {!user ? (
          <Link to="/login" className={isActive("/login")}>Login</Link>
        ) : (
          <a href="/" onClick={handleLogout} className="nav-item">Logout</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
