import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { selectUser } from "../../store/slices/user/authSlice";
import { UserData } from "../../utils/firebase/auth";
import { getExpense, saveExpense } from "../../utils/firebase/expense";
import DayPickerComponent from "../dayPicker/DayPicker";
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

const ExpenseForm = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  const params = useParams<{ expenseId: string }>();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveExpenseHandler = async (event: any) => {
    event.preventDefault();

    await saveExpense((user as UserData).uid, {
      description,
      amount,
      note,
      createdAt: 1212,
      uid: params.expenseId || "",
    });

    console.log("expense to firebase", 1);

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
          <DayPickerComponent />
          <TextAreaElement
            placeholder="Expense description"
            onChange={onNoteChanged}
            value={note}
          />
          <div>
            <AddButton onClick={saveExpenseHandler} disabled={!canSave}>
              Add expense
            </AddButton>
          </div>
        </FormContainer>
      </AddItemContainer>
    </AddContainer>
  );
};

export default ExpenseForm;
