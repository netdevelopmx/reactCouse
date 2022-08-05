import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import NoMatch from "../components/404";
import Home from "../components/home";
import AddExpense from "../components/addExpense";
import EditExpense from "../components/editExpense";
import Header from "../components/Header";
import { Help, HelpPage } from "../components/help";


///Old Versions

const Myroutes = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/edit-expense/:id" element={<EditExpense />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/:id" element={<HelpPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default Myroutes;
        <BrowserRouter>
            <Route path="/" element={<Home />} />
            <Route path="/add-expense" element={<AddExpense />} />
        </BrowserRouter>
