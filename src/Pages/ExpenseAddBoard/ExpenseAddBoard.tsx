import NavBar from "../../components/navBar/NavBar";
import { Adddashboard } from "./ExpenseAddBoard.styles";
import ExpenseAdd from "../../components/expnesesForm/ExpensesForm";

const ExpenseAddBoard = () => {
  return (
    <Adddashboard>
      <NavBar />
      <ExpenseAdd />
    </Adddashboard>
  );
};

export default ExpenseAddBoard;
