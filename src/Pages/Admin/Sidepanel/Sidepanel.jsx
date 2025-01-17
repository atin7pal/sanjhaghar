import React from "react";
import { NavLink } from "react-router-dom";
import admin from "../../../../src/assets/Images/home/logo.png";
import { MdContacts, MdRateReview } from "react-icons/md";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import background from "../../../assets/Images/login/adminbg.jpg";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function Sidepanel({ popup }) {
  return (
    <div className="pl-2 w-56 py-2 fixed min-h-screen bg-slate-200/30 max-h-[150vh]">
      <div className="w-full py-6 px-2 rounded-md border-gray-300 min-h-[97vh] bg-white">
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div
            className="py-10 px-10 border-sky-300 bg-slate-200/30 rounded-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${admin})` }}
          ></div>
          <h1 className="text-xl font-bold mb-6 text-gray-800 font-sans">
            Admin Panel
          </h1>
        </div>
        <ul>
          <li className="mb-2 w-full flex justify-start items-center">
            <NavLink
              to="/useradmin/tablereservation"
              className={({ isActive }) =>
                isActive
                  ? `w-full bg-slate-200/30 h-full px-4 flex justify-around font-semibold items-center text-center py-3  rounded-md  transition-all text-gray-800`
                  : `transition-all w-full h-full px-4 flex justify-around font-semibold text-gray-800 items-center text-center py-3  rounded-md`
              }
            >
              <p className="text-gray-800">Reservation</p>
              <span>
                <MdRateReview />
              </span>
            </NavLink>
          </li>

          <li className="mb-2 w-full flex justify-start items-center">
            <NavLink
              to="/useradmin/contacts"
              className={({ isActive }) =>
                isActive
                  ? `w-full bg-slate-200/30 h-full px-4 flex justify-around font-semibold items-center text-center py-3  rounded-md  transition-all text-gray-800`
                  : `transition-all w-full h-full px-4 flex justify-around font-semibold text-gray-800 items-center text-center py-3  rounded-md`
              }
            >
              <p className="text-gray-800">Contacts</p>
              <span>
                <MdContacts />
              </span>
            </NavLink>
          </li>

          <li className="mb-2 w-full flex justify-start items-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `w-full bg-slate-200/30 h-full px-4 flex justify-around font-semibold items-center text-center py-3  rounded-md  transition-all text-gray-800`
                  : `transition-all w-full h-full px-4 flex justify-around font-semibold text-gray-800 items-center text-center py-3  rounded-md`
              }
              to="/useradmin/popup"
            >
              <p className="text-gray-800">Popup</p>
              <span>
                <BiSolidCalendarEdit />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidepanel;
