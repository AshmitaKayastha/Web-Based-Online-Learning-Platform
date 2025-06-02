import { useEffect, useState } from "react";
import { IUserModel, getActiveUser, removeActiveUser } from "../LocalStorage";
import { useNavigate } from "react-router";

const Home = () => {
  const [activeUser, setActiveUser] = useState<IUserModel>();

  useEffect(() => {
    var user = getActiveUser();
    if (user != null) setActiveUser(user);
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    removeActiveUser();
    navigate("/login");
  };

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 50,
        flexDirection: "column",
      }}
    >
      <div>Welcome {activeUser?.name}</div>
      <div>
        <button onClick={handleLogout} style={{ width: 200 }}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
