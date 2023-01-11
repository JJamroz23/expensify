import { useAppSelector } from "../../hooks/hooks";
import { selectExpenses } from "../../store/slices/expenses/expensesSlice";
import { ExpList, ListBox, TitleBox } from "./ExpensesList.styles";

const ExpensesList = () => {
  const expenses = useAppSelector(selectExpenses);

  return (
    <ListBox>
      {expenses.map(({ description, note, amount }) => (
        <>
          <TitleBox>
            <span>Expense</span>
            <span>Amount</span>
          </TitleBox>
          <ExpList>
            <p>{description}</p>
            <div>{amount}</div>
            <div>{note}</div>
          </ExpList>
        </>
      ))}
    </ListBox>
  );
};

export default ExpensesList;
