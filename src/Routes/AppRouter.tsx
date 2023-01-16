import { Route, Routes } from "react-router-dom";
import Authentication from "../Pages/Authentication/Authentication";
import ExpenseFormBoard from "../Pages/ExpenseFormBoard/ExpenseFormBoard";
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
        <Route path="/dashboard" element={<ExpensesDashboard />} />
        <Route path="/addboard/new" element={<ExpenseFormBoard />} />
        <Route path="/addboard/:expenseId" element={<ExpenseFormBoard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
