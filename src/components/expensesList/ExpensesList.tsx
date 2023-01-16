import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getExpense,
  restoreDefaultExpenses,
  selectExpensesState,
} from "../../store/slices/expenses/expensesSlice";
import Loader from "../loader/Loader";
import {
  ExpList,
  ListBox,
  TitleBox,
  ExpItem1,
  ExpItem2,
  ExpItem3,
} from "./ExpensesList.styles";

const ExpensesList = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(selectExpensesState);
  console.log(items);
  // const orderedExpenses = expenses
  //   .slice()
  //   .sort((a, b) => b.description.localeCompare(a.description));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getExpense());

    return () => {
      dispatch(restoreDefaultExpenses());
    };
  }, [dispatch]);

  return (
    <div>
      {!loading ? (
        <Loader />
      ) : (
        <ListBox>
          <>
            <TitleBox>
              <span>Expense</span>
              <span>Amount</span>
            </TitleBox>
            {items.map((expense) => (
              <ExpList
                key={expense.uid}
                onClick={() => navigate(`/addboard/${expense.uid}`)}
              >
                <ExpItem1>{expense.description}</ExpItem1>
                <ExpItem2>{expense.amount}$</ExpItem2>
                <ExpItem3>{expense.note}</ExpItem3>
              </ExpList>
            ))}
          </>
        </ListBox>
      )}
    </div>
  );
};

export default ExpensesList;
