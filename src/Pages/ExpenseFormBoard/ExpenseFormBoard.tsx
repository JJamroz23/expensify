import NavBar from "../../components/navBar/NavBar";
import { Adddashboard } from "./ExpenseFormBoard.styles";
import ExpenseForm from "../../components/expnesesForm/ExpensesForm";

const ExpenseFormBoard = () => {
  return (
    <Adddashboard>
      <NavBar />
      <ExpenseForm />
    </Adddashboard>
  );
};

export default ExpenseFormBoard;
