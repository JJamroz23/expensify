import { Route, Routes } from "react-router-dom";
import Authentication from "../Pages/Authentication/Authentication";
import ExpenseAddBoard from "../Pages/ExpenseAddBoard/ExpenseAddBoard";
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
        <Route path="/addboard/new" element={<ExpenseAddBoard />} />
        <Route path="/addboard/:expenseId" element={<ExpenseAddBoard />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
