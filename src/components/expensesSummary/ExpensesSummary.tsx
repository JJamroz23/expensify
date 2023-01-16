import { useNavigate } from "react-router-dom";
import {
  SummaryBox,
  SummaryButton,
  ContentContainer,
  TextContainer,
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
        <TextContainer>
          <b>{totalNumber}</b> {totalNumber === 1 ? "expense" : "expenses"} with
          total value <b>{totalAmount}$</b>
        </TextContainer>
        <SummaryButton onClick={addboard}>Add Expense</SummaryButton>
      </ContentContainer>
    </SummaryBox>
  );
};
