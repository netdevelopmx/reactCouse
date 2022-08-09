import { createStore, combineReducers } from "redux";
import uuid from "react-uuid";
import { db, SaveExpense } from "../firebase/firebase";
// ADD_EXPENSEsrc
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt, id: uuid() };
    console.log(expense);

    var result = SaveExpense(expense, (data) => {
      console.log("este es el callback");
      console.log(data.key);
      expense.id = data.key;
      dispatch(
        addExpense({
          id: data.key,
          ...expense,
        })
      );
    });
  };
};



// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
