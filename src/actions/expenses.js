import { createStore, combineReducers } from "redux";
import uuid from "react-uuid";
import { db, SaveExpense, GetExpenses , DeleteExpense , updateExpense } from "../firebase/firebase";
// ADD_EXPENSEsrc
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
     const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt, id: uuid() };
  

    var result = SaveExpense(expense, (data) => {
 
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
export const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = (id) => {
  console.log("startRemoveExpense");
  console.log(id);

  return (dispatch, getState) => {
  
    //const uid = getState().auth.uid;
  
    return DeleteExpense(id, () => {
        dispatch(removeExpense( id ));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
 
  return (dispatch, getState) => {
    //const uid = getState().auth.uid;
    console.log("startEditExpense" , id , updates);
    return updateExpense(id,updates,() => {
      dispatch(editExpense(id, updates));
    });
    
    
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    console.log(uid);

    const expenses = [];
    return GetExpenses((snapshot , id)  => {
    
     // console.log("Data back in callback");
     // console.log(snapshot);

      snapshot.id =id;
      expenses.push({
        id: snapshot.id,
        ...snapshot,
      });

      console.log(expenses);

      dispatch(setExpenses(expenses));
    });
  };
};
