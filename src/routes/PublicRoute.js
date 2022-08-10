import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import NoMatch from "../components/404";
import Home from "../components/home";
import AddExpense from "../components/addExpense";
import EditExpense from "../components/editExpense";
import Header from "../components/Header";
import { Help, HelpPage } from "../components/help";
import LoginPage from "../components/LoginPage";
import { login } from "../actions/auth";

///Old Versions 

const PublicMyroutes = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default PublicMyroutes;
       