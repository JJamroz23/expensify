import { useNavigate } from "react-router-dom";
import {
  SummaryBox,
  SummaryButton,
  ContentContainer,
} from "./ExpensesSummary.styles";
import { useAppSelector } from "../../hooks/hooks";
import { selectExpenses } from "../../store/slices/expenses/expensesSlice";

export const ExpensesSummary = () => {
  const navigate = useNavigate();
  const expenses = useAppSelector(selectExpenses);
  const addboard = () => {
    navigate("/addboard/new");
  };

  const totalAmount = expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
  let totalNumber = expenses.length;

  return (
    <SummaryBox>
      <ContentContainer>
        <h2>
          {totalNumber} {totalNumber === 1 ? "expense" : "expenses"} with total
          value {totalAmount}$
        </h2>
        <SummaryButton onClick={addboard}>Add Expense</SummaryButton>
      </ContentContainer>
    </SummaryBox>
  );
};
