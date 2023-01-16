import ExpensesList from "../../components/expensesList/ExpensesList";
import { ExpensesSummary } from "../../components/expensesSummary/ExpensesSummary";
import NavBar from "../../components/navBar/NavBar";
import { Dashboard } from "./ExpensesDashboard.styles";

const ExpensesDashboard = () => {
  return (
    <Dashboard>
      <NavBar />
      <ExpensesSummary />
      <ExpensesList />
    </Dashboard>
  );
};

export default ExpensesDashboard;
