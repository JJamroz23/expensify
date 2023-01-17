import { Navigate, Outlet } from "react-router-dom";
import { useIsLoggedIn } from "../hooks";

const PublicRoute = () => {
  const logged = useIsLoggedIn();
  return !logged ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
