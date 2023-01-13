import { nanoid } from "@reduxjs/toolkit";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { omit } from "lodash";
import { Expense } from "../../store/slices/expenses/expensesSlice";
import { database } from "./";
import { UserData } from "./auth";

export const getExpense = async (
  userId: UserData["uid"],
  expenseId: Expense["uid"]
  // expenseDto: Expense
) => {
  const docRef = doc(database, `users/${userId}/expenses`, expenseId);

  const docSnap = await getDoc(docRef);
  try {
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data() as Expense);

      return docSnap.data() as Expense;
    } else {
      throw new Error("No such document!");
    }
  } catch (err) {
    console.error("Error fetching expense data", err);
    return null;
  }
};

export const getExpenses = async (userId: UserData["uid"]) => {
  const querySnapshot = await getDocs(
    collection(database, `users/${userId}/expenses`)
  );
  const listData = querySnapshot.docs
    .map((doc) => ({
      ...(doc.data() as Expense),
      uid: doc.id,
    }))
    .sort((a, b) => a.uid.localeCompare(b.uid));

  return listData;
};

export const saveExpense = async (
  userId: UserData["uid"],
  expenseDto: Expense
) => {
  if (expenseDto.uid) {
    console.log(expenseDto.uid);
  }
  try {
    console.log(expenseDto, "122");
    const expenseRef = doc(
      database,
      `users/${userId}/expenses`,
      expenseDto.uid || nanoid()
    );
    await setDoc(expenseRef, omit(expenseDto, "uid"), { merge: true });
  } catch (error) {
    console.error(error);
  }
};
