import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  Expense,
  getExpense,
  restoreDefaultExpenses,
  selectExpensesState,
  selectExpenses,
} from "../../store/slices/expenses/expensesSlice";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import Loader from "../loader/Loader";
import {
  ExpList,
  ListBox,
  TitleBox,
  ExpItem1,
  ExpItem2,
  ExpItem3,
  ExpItem4,
} from "./ExpensesList.styles";

type ExpenseKeys = keyof Expense;

const ExpensesList = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(selectExpensesState);

  const items = [...useAppSelector(selectExpenses)];

  const [sortBy, setSortBy] = useState<ExpenseKeys>("amount");
  const [isDesc, setIsDesc] = useState(true);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getExpense());

    return () => {
      dispatch(restoreDefaultExpenses());
    };
  }, [dispatch]);

  const filterByText = items.filter((a) =>
    a.description.includes(text.toLowerCase())
  );

  useMemo(() => {
    return filterByText;
  }, [filterByText]);

  useMemo(() => {
    if (sortBy === "description" || sortBy === "note" || sortBy === "uid") {
      return filterByText.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (sortBy === "createdAt") {
      return filterByText.sort((a, b) =>
        isDesc
          ? new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime()
          : new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()
      );
    }

    return filterByText.sort((a, b) =>
      isDesc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
    );
  }, [sortBy, filterByText, isDesc]);

  return (
    <div>
      <ExpensesFilter setSortBy={setSortBy} setText={setText} />
      {!loading ? (
        <Loader />
      ) : (
        <ListBox>
          <>
            <TitleBox>
              <button onClick={() => setSortBy("description")}>Expense</button>
              {isDesc ? (
                <button onClick={() => setIsDesc(false)}>Decrement</button>
              ) : (
                <button onClick={() => setIsDesc(true)}>Increment</button>
              )}
              <button onClick={() => setSortBy("amount")}>Amount</button>
            </TitleBox>
            {filterByText.map((expense) => (
              <ExpList
                key={expense.uid}
                onClick={() => navigate(`/addboard/${expense.uid}`)}
              >
                <ExpItem1>{expense.description}</ExpItem1>
                <ExpItem2>{expense.amount} $</ExpItem2>
                <ExpItem3>{expense.note}</ExpItem3>
                <ExpItem4>{expense.createdAt}</ExpItem4>
              </ExpList>
            ))}
          </>
        </ListBox>
      )}
    </div>
  );
};

export default ExpensesList;
