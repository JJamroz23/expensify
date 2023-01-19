import { useNavigate } from "react-router-dom";
import {
  SummaryBox,
  SummaryButton,
  ContentContainer,
  TextContainer,
} from "./ExpensesSummary.styles";
import { useAppSelector } from "../../hooks";
import { selectExpenses } from "../../store/slices/expenses/expensesSlice";
import { Trans, useTranslation } from "react-i18next";

export const ExpensesSummary = () => {
  const navigate = useNavigate();
  const expenses = useAppSelector(selectExpenses);

  const { t } = useTranslation();
  const totalAmount = expenses.reduce((val, curr) => val + curr.amount, 0);
  const totalNumber = expenses.length;
  console.log(t("aa"));

  const totalAmountCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalAmount);

  return (
    <SummaryBox>
      <ContentContainer>
        <TextContainer>
          <Trans>
            {t("summary.text", {
              totalNumber,
              totalValue: totalAmountCurrency,
            })}
          </Trans>
        </TextContainer>
        <SummaryButton onClick={() => navigate("/addboard/new")}>
          {t("summary.addExpense")}
        </SummaryButton>
      </ContentContainer>
    </SummaryBox>
  );
};
