import { nanoid } from "@reduxjs/toolkit";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { Expense } from "../../store/slices/expenses/expensesSlice";
import { database } from "./";
import { UserData } from "./auth";

export const getExpenses = async (userId: UserData["uid"]) => {
  const querySnapshot = await getDocs(
    collection(database, `users/${userId}/expenses`)
  );
  const x = querySnapshot.docs
    .map((doc) => ({
      ...(doc.data() as Expense),
      uid: doc.id,
    }))
    .sort((a, b) => a.uid.localeCompare(b.uid));

  return x;
};

export const saveExpense = async (
  userId: UserData["uid"],
  expenseDto: Expense & { uid?: string }
) => {
  if (expenseDto.uid) {
    console.log(expenseDto.uid);
  }
  try {
    console.log(expenseDto, "122");
    const expenseRef = doc(database, `users/${userId}/expenses`, nanoid());
    await setDoc(expenseRef, expenseDto, { merge: true });
  } catch (error) {
    console.error(error);
  }
};
