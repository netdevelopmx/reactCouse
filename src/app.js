import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Myroutes from "./routes/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
 
import  getVisibleExpenses from "./selectors/expenses";

import './firebase/firebase.js';
import './playground/promises.js';
import { startSetExpenses } from "./actions/expenses";


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

root.render(<p>loagind ...</p>);

store.dispatch(startSetExpenses()).then(() => {
    root.render(gbl);
});

    