import { Route, Routes } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";
import Authentication from "../Pages/Authentication/Authentication";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />}>
        {/* <Route index element={<NavBar />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
