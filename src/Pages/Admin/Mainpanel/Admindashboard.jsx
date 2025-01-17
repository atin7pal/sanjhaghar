import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidepanel from "../Sidepanel/Sidepanel";
import Mainpanel from "../Mainpanel/Mainpanel";

export function Admindashboard() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const showPopup = () => {
    setShow(!show);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen w-full bg-slate-200">
      {show && (
        <div className="w-full h-full absolute bg-black/80 flex justify-center items-center flex-col z-50 backdrop-blur-md">
          <div className="px-5 py-8 bg-gray-50 w-1/2 h-auto shadow-black-200 shadow-lg flex flex-col gap-5 rounded-md z-60">
            <h2 className="font-semibold">Are you sure you want to logout?</h2>
            <p className="text-sm">
              Clicking logout will redirect you to the login page.
            </p>
            <div className="w-full flex justify-end items-center gap-3">
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
              <button
                onClick={() => setShow(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Sidepanel popup={showPopup} />
      <div className="ml-56 w-full h-full">
        <Mainpanel popup={showPopup}>
          <Outlet />
        </Mainpanel>
      </div>
    </div>
  );
}
