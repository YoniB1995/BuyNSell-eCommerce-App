import React, { useState, useEffect } from "react";
import AdminPanelAccepted from "../features/Table/AdminPanelAccepted";
import AdminTablePanel from "./../features/Table/AdminPanelTable";
import "./AdminPanel.css";

const AdminPanel = () => {
  return (
    <div className="admin-panel-body">
      <h1>Admin Panel Management</h1>
      <h4>Contacts waiting for approval / answer </h4>
      <AdminTablePanel />
      <h4>Submitted and answered Contacts</h4>
      <AdminPanelAccepted />

      <h4>Users Collection</h4>
      <AdminPanelAccepted type="usersDB" />
    </div>
  );
};

export default AdminPanel;
