import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Myroutes from "./routes/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import { addExpense }  from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import  getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

 
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
//console.log(getVisibleExpenses(store.getState()));

const gbl = (
    <Provider store={store}>
        <Myroutes />
    </Provider>
);
 

 
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(gbl);
    