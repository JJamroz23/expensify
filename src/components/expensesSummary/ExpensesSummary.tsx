import { useNavigate } from "react-router-dom";
import {
  SummaryBox,
  SummaryButton,
  ContentContainer,
} from "./ExpensesSummary.styles";

export const ExpensesSummary = () => {
  const navigate = useNavigate();
  const addboard = () => {
    navigate("/addboard/new");
  };

  return (
    <SummaryBox>
      <ContentContainer>
        <h2>0 expenses with total value $0</h2>
        <SummaryButton onClick={addboard}>Add Expense</SummaryButton>
      </ContentContainer>
    </SummaryBox>
  );
};
