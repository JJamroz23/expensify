import {
  SummaryBox,
  SummaryButton,
  ContentContainer,
} from "./ExpensesSummary.styles";

export const ExpensesSummary = () => {
  return (
    <SummaryBox>
      <ContentContainer>
        <h2>0 expenses with total value $0</h2>
        <SummaryButton>Add Expense</SummaryButton>
      </ContentContainer>
    </SummaryBox>
  );
};
