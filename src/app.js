import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Myroutes from "./routes/AppRouter";
import PublicMyroutes from "./routes/PublicRoute";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";

import getVisibleExpenses from "./selectors/expenses";

import "./firebase/firebase.js";
import "./playground/promises.js";
import { startSetExpenses } from "./actions/expenses";
import { authapp } from "./firebase/firebase";
import {login , logout} from "./actions/auth";


const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const gblapp = (
  <Provider store={store}>
    <Myroutes />
  </Provider>
);

const gbl = (
    <Provider store={store}>
      <PublicMyroutes />
    </Provider>
  );

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<p>loagind ...</p>);

authapp.onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      store.dispatch(login(user.uid));
      store
        .dispatch(startSetExpenses())
        .then(() => {
            root.render(gblapp);
        })
        .catch((e) => {
          console.log(e);
        });
    }else{
      store.dispatch(logout());
      root.render(gbl);
    }
  });


 