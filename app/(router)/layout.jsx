import React from "react";
import SideNav from "./components/SideNav";
import Header from './components/Header'

const layout = ({ children }) => {
  return (
    <div>
      <div className="sm:w-64 fixed hidden sm:block">
        <SideNav />
      </div>
      <div className="ml-64">
        <Header/>
      {children}
      </div>
    </div>
  );
};

export default layout;
