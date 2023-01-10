import { Route, Routes } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Authentication from "../Pages/Authentication/Authentication";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route index element={<Authentication />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/desktop" element={<NavBar />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
