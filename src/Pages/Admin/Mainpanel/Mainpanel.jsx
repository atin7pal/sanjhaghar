import React from "react";
import { IoMdPower } from "react-icons/io";

function Mainpanel({ children, popup }) {
  return (
    <>
      <div className="w-full h-full flex justify items-center flex-col bg-slate-200 px-3 overflow-x-auto-scroll">
        <div className="w-full h-auto px-4 flex justify-between items-center py-2 border-b bg-white my-2 rounded-md">
          <h2 className="font-semibold">Welcome, Admin</h2>
          <button
            className=" py-2 px-2 rounded-full flex  flex-col justify-center items-center hover:text-red-600"
            onClick={popup}
          >
            <IoMdPower className="text-lg" />
            <p className="text-[10px]">Logout</p>
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

export default Mainpanel;
