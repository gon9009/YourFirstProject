import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper">
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
