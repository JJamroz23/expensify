import {
  FormFilter,
  InputText,
  Select,
  RangeContainer,
} from "./ExpensesFilter.styles";
import DatePicker from "react-datepicker";
import { ContentContainer } from "../expensesSummary/ExpensesSummary.styles";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ExpensesFilter = ({ setSortBy, setText }: any) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const { t } = useTranslation();

  const onSortChange = (e: React.FormEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === "date") {
      setSortBy("createdAt");
    } else if (e.currentTarget.value === "amount") {
      setSortBy("amount");
    }
  };

  const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <ContentContainer>
      <FormFilter>
        <InputText
          type="text"
          placeholder="search expense"
          onChange={onTextChange}
        />
        <Select onChange={onSortChange}>
          <option value="date">{t("filter.date")}</option>;
          <option value="amount">{t("filter.amount")}</option>
        </Select>
        <RangeContainer>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              // @ts-ignore
              setDateRange(update);
            }}
            isClearable={true}
          />
        </RangeContainer>
      </FormFilter>
    </ContentContainer>
  );
};

export default ExpensesFilter;
