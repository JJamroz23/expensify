import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoutes = () => {
  const { logged } = useAuth();
  const navigate = useNavigate();

  if (logged) {
    navigate("/desktop");
  }
  return <Outlet />;
};

export default PublicRoutes;
