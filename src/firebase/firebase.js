// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import moment from "moment";
import {
  getDatabase,
  ref,
  set,
  remove,
  update,
  get,
  child,
  onValue,
  once,
  push,
} from "firebase/database";

import expenses from "../selectors/expenses";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClWI7v4d9-BQE-ZoZpa9ai786ABoRUNHs",
  authDomain: "reactsample-15ff1.firebaseapp.com",
  databaseURL: "https://reactsample-15ff1-default-rtdb.firebaseio.com",
  projectId: "reactsample-15ff1",
  storageBucket: "reactsample-15ff1.appspot.com",
  messagingSenderId: "807752930753",
  appId: "1:807752930753:web:7c5576c030133085810b40",
  measurementId: "G-M8WC2LC0J6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = getDatabase(app);
const expensesdb = ref(db, "expenses");

export { firebase, SaveExpense, GetExpensesById, updateExpense, DeleteExpense, GetExpenses , db as default };


const SaveExpense = (expense , callback) => {
  const db = getDatabase();
  push(expensesdb, {
    id: expense.id,
    description: expense.description,
    amount: expense.amount,
    createdAt: expense.createdAt,
  }).then((snapshot) => {
    console.log(snapshot);
     callback(snapshot);
    return snapshot.key;
  });
};


const GetExpensesById = (id) => {
  return onValue(
    ref(db, "/expenses/" + id),
    (snapshot) => {
      console.log(snapshot.val());
    },
    {
      onlyOnce: true,
    }
  );
};

const updateExpense = (id, expense) => {
  update(ref(db, "/expenses/" + id), {
    description: expense.description,
    amount: expense.amount,
    createdAt: expense.createdAt,
  });
}


const DeleteExpense = (id) => {
  remove(ref(db, "/expenses/" + id));
}

const GetExpenses = () => {
  return get(expensesdb, (snapshot) => {
    
  }).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      console.log(childSnapshot.val());
      expenses.dis({
        id: childSnapshot.key,
        description: childSnapshot.val().description,
        amount: childSnapshot.val().amount,
        createdAt: childSnapshot.val().createdAt,
      });


    }
    );
  }).catch((error) => {
    console.log(error);
  }).finally(() => {
    console.log("Finally");
  });
}

// SaveExpense({
//   id: "1",
//   description: "Rent",
//   amount: 100,
//   createdAt: moment().valueOf(),
// });

 

// GetExpensesById("-N8z9VFRVEsD2qNnT4Ml");
// DeleteExpense("-N8z9VFRVEsD2qNnT4Ml");
// GetExpenses();