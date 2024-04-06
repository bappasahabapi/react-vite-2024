import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className=" border-green-500 border ">
      <p className=" ml-5  ">Dashboard Layout SubNav</p>
        <ul className="flex gap-5 bg-purple-100 p-3">
          <li>Analytics</li>
          <li>Settings</li>
          <li></li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;
