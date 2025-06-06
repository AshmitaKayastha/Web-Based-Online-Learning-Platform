import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, updateActiveUser } from "../LocalStorage";
import "../login.css"; // make sure the path is correct

interface ILoginModel {
  username: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.username || !data.password) {
      alert("Please fill in all fields");
      return;
    }
    const user = getUser(data.username, data.password);
    if (!user) {
      alert("Invalid credentials");
      return;
    }
    updateActiveUser(user);
    navigate("/"); // redirect to homepage after login
  };

  return (
    <div className="login-container">
      <div className="background-shape blue"></div>
      <div className="background-shape orange"></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        <label>Username</label>
        <input
          type="text"
          placeholder="Email"
          id="username"
          value={data.username}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        <button>Log In</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
