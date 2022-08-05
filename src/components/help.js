import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link , NavLink } from "react-router-dom";

export  const Help = () => {
    return (
      <div>
        <div>Help</div>
        
          <Link  to="/help/1">Help Special</Link>
      </div>
    );
  };

  export const HelpPage = () => {
    return (
      <div>
        <div>Help 1</div>
        
          <Link  to="/help">Help </Link>
      </div>
    );
  };



  