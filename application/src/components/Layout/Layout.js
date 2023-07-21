// Layout.js
import React from "react";
import { Navbar } from "../navbar";
import Footer from "../footer";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <Router>
      <Navbar />
      {children}
      <Footer />
    </Router>
  );
};

export default Layout;
