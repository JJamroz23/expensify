import { Route, Routes } from "react-router-dom";
import Authentication from "../Pages/Authentication/Authentication";
import ExpensesDashboard from "../Pages/ExpensesDashboard/ExpensesDashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route index element={<Authentication />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/desktop" element={<ExpensesDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
