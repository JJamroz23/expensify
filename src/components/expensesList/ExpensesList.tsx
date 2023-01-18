import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  Expense,
  getExpenses,
  restoreDefaultExpenses,
  selectExpensesState,
} from "../../store/slices/expenses/expensesSlice";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import Loader from "../loader/Loader";
import {
  Button,
  ExpItem1,
  ExpItem2,
  ExpItem3,
  ExpItem4,
  ExpList,
  ListBox,
  TitleBox,
} from "./ExpensesList.styles";

type ExpenseKeys = keyof Expense;

function filterByText<T extends { description: string }>(
  array: T[],
  text: string
) {
  return array.filter((a) => a.description.includes(text.toLowerCase()));
}

const ExpensesList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, items } = useAppSelector(selectExpensesState);
  const [sortBy, setSortBy] = useState<ExpenseKeys>("amount");
  const [isDesc, setIsDesc] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getExpenses());
    return () => {
      dispatch(restoreDefaultExpenses());
    };
  }, [dispatch]);

  const sortedItems = useMemo(() => {
    const arr = text ? filterByText<Expense>(items, text) : [...items];

    if (sortBy === "description" || sortBy === "note" || sortBy === "uid") {
      return arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (sortBy === "createdAt") {
      return arr.sort((a, b) =>
        isDesc
          ? new Date(b[sortBy]).getTime() - new Date(a[sortBy]).getTime()
          : new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()
      );
    }

    // by amount
    return arr.sort((a, b) =>
      isDesc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]
    );
  }, [items, sortBy, isDesc, text]);

  return (
    <div>
      <ExpensesFilter setSortBy={setSortBy} setText={setText} />
      {loading ? (
        <Loader />
      ) : (
        <ListBox>
          <>
            <TitleBox>
              <Button onClick={() => setSortBy("description")}>Expense</Button>
              <Button onClick={() => setIsDesc(!isDesc)}>
                {isDesc ? "DESC" : "ASC"}
              </Button>
              <Button onClick={() => setSortBy("amount")}>Amount</Button>
            </TitleBox>
            {sortedItems.map((expense) => (
              <ExpList
                key={expense.uid}
                onClick={() => navigate(`/addboard/${expense.uid}`)}
              >
                <ExpItem1>{expense.description}</ExpItem1>
                <ExpItem2>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(expense.amount)}
                </ExpItem2>
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
