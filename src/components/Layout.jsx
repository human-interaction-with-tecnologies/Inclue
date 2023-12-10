import React from "react";
import Sidebar from "./Sidebar";


const Layout = ({ children, title }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4">
        <div className="mb-4 text-white">
          <h1>{title}</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};



export default Layout;
