import { Navigate, Outlet } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";


const PrivateRoute = () => {
  const logged = useIsLoggedIn();
  return logged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
