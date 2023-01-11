import { Navigate, Outlet } from "react-router-dom";
import useIsLoggedIn from "../hooks/useIsLoggedIn";


const PublicRoute = () => {
  const logged = useIsLoggedIn();
  return !logged ? <Outlet /> : <Navigate to="/desktop" />;
};

export default PublicRoute;
