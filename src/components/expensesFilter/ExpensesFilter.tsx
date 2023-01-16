import {
  FilterBox,
  FormFIlter,
  InputText,
  Select,
  RangeContainer,
} from "./ExpensesFilter.styles";
import DatePicker from "react-datepicker";
import { ContentContainer } from "../expensesSummary/ExpensesSummary.styles";
import { useState } from "react";

const ExpensesFilter = ({ setSortBy, setText }: any) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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
      <FilterBox>
        <FormFIlter>
          <InputText
            type="text"
            placeholder="search expense"
            onChange={onTextChange}
          />
          <Select onChange={onSortChange}>
            <option value="date">Date</option>;
            <option value="amount">Amount</option>
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
        </FormFIlter>
      </FilterBox>
    </ContentContainer>
  );
};

export default ExpensesFilter;
