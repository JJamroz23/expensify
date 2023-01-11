import {
  FilterBox,
  FormFIlter,
  InputText,
  Select,
} from "./ExpensesFilter.styles";

import { ContentContainer } from "../expensesSummary/ExpensesSummary.styles";

export const ExpensesFilter = () => {
  return (
    <ContentContainer>
      <FilterBox>
        <FormFIlter>
          <InputText type="text" placeholder="search expense" />
          <Select>
            <option value="date">Date</option>;
            <option value="amount">Amount</option>
          </Select>
        </FormFIlter>
      </FilterBox>
    </ContentContainer>
  );
};
