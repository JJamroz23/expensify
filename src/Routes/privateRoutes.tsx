import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { logged } = useAuth();
  const navigate = useNavigate();

  if (!logged) {
    navigate("/");
  }

  return <Outlet />;
};

export default PrivateRoutes;
