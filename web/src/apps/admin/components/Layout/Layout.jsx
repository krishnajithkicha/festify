import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import UsersIndex from "../../pages/Users";
import OrganisationsIndex from "../../pages/Organisations";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users/*" element={<UsersIndex />} />
          <Route path="/organisations/*" element={<OrganisationsIndex />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;