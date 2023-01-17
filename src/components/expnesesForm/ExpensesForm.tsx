import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { selectUser } from "../../store/slices/user/authSlice";
import { UserData } from "../../utils/firebase/auth";
import {
  deleteExpense,
  getExpense,
  saveExpense,
} from "../../utils/firebase/expense";
import {
  AddButton,
  AddContainer,
  AddItemContainer,
  ExpenseNav,
  ExpenseNavText,
  FormContainer,
  InputElement,
  TextAreaElement,
} from "./ExpensesForm.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const ExpenseForm = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const params = useParams<{ expenseId: string }>();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [createdAt, setcreatedAt] = useState(new Date());

  const onDescriptionChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);
  const onAmountChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAmount(Number(e.target.value));
  const onNoteChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setNote(e.target.value);

  const loadData = async () => {
    if (!params.expenseId) return;

    try {
      const expenseData = await getExpense(
        (user as UserData).uid,
        params.expenseId
      );

      if (!expenseData) {
        navigate("/dashboard");
        return;
      }

      setDescription(expenseData.description);
      setAmount(expenseData.amount);
      setNote(expenseData.note);
      setcreatedAt(new Date(expenseData.createdAt));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteExpenseHandler = async (event: any) => {
    event?.preventDefault();
    if (!params.expenseId) return;
    try {
      await deleteExpense((user as UserData).uid, params.expenseId);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  const saveExpenseHandler = async (event: any) => {
    event.preventDefault();

    await saveExpense((user as UserData).uid, {
      description,
      amount,
      note,
      createdAt: dayjs(createdAt.toISOString()).format("YYYY-MM-DD"),
      uid: params.expenseId || "",
    });

    navigate("/dashboard");
  };

  const canSave = !!description && !!amount && !!note;

  return (
    <AddContainer>
      <ExpenseNav>
        {params.expenseId ? (
          <ExpenseNavText>Edit Expense</ExpenseNavText>
        ) : (
          <ExpenseNavText>Add Expense</ExpenseNavText>
        )}
      </ExpenseNav>
      <AddItemContainer>
        <FormContainer>
          <InputElement
            type="text"
            placeholder="Description"
            onChange={onDescriptionChanged}
            value={description}
          />
          <InputElement
            type="text"
            placeholder="Expense amount"
            onChange={onAmountChanged}
            value={amount}
          />
          <DatePicker
            selected={createdAt}
            // @ts-ignore
            onChange={(date) => setcreatedAt(date)}
          />
          <TextAreaElement
            placeholder="Expense description"
            onChange={onNoteChanged}
            value={note}
          />
          <div>
            {params.expenseId ? (
              <>
                <AddButton onClick={saveExpenseHandler} disabled={!canSave}>
                  Add expense
                </AddButton>
                <AddButton onClick={deleteExpenseHandler}>
                  Delete expense
                </AddButton>
              </>
            ) : (
              <AddButton onClick={saveExpenseHandler} disabled={!canSave}>
                Add expense
              </AddButton>
            )}
          </div>
        </FormContainer>
      </AddItemContainer>
    </AddContainer>
  );
};

export default ExpenseForm;
