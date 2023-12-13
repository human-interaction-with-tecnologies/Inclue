import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children, title}) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div style={{backgroundColor: "#D9D9D9", height: "fit-content", minHeight: "100%"}} className="flex-1 p-7">
        <div className="text-white">
          <h1 className="text-2xl font-semibold" style={{color:"#284B63"}}>{title}</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};


export default Layout;