import { Navigate } from "react-router-dom";
import { getActiveUser } from "../../LocalStorage";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = getActiveUser();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
