import { useNavigate } from "react-router-dom";
import {
  SummaryBox,
  SummaryButton,
  ContentContainer,
  TextContainer,
} from "./ExpensesSummary.styles";
import { useAppSelector } from "../../hooks";
import { selectExpenses } from "../../store/slices/expenses/expensesSlice";

export const ExpensesSummary = () => {
  const navigate = useNavigate();
  const expenses = useAppSelector(selectExpenses);

  const totalAmount = expenses.reduce((val, curr) => val + curr.amount, 0);
  const totalNumber = expenses.length;

  const totalAmountCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalAmount);

  return (
    <SummaryBox>
      <ContentContainer>
        <TextContainer>
          <b>{totalNumber}</b> {totalNumber === 1 ? "expense" : "expenses"} with
          total value <b>{totalAmountCurrency}</b>
        </TextContainer>
        <SummaryButton onClick={() => navigate("/addboard/new")}>
          Add Expense
        </SummaryButton>
      </ContentContainer>
    </SummaryBox>
  );
};
