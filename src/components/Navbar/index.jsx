import React from "react";
import logo from "../../shopee.png";
import { useGlobalContext } from "../../context";
import { BsSearch, BsCart2, BsPerson } from "react-icons/bs";

const NavBar = () => {
  const { amount } = useGlobalContext();
  return (
    <div className="navbar relative">
      <div className="container">
        <div className="flex justify-between">
          <div className="invisible w-20 h-20 p-6 flex-1">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-full flex bg-white gap-1.5 rounded p-1.5 my-auto">
            <span className="flex justify-center items-center mr-1.5">
              <BsSearch />
            </span>
            <input type="text" placeholder="Search..." className="" />
          </div>
          <div className="flex justify-center items-center gap-3 ml-5 mr-3">
            <div className="flex justify-center items-center">
              <BsCart2 className="text-white w-6 h-6" />
              <div className="absolute top-4 right-9 bg-gray-300 rounded-full icon py-0">
                <span className="text-red-700">{amount}</span>
              </div>
            </div>
            <div className="flex justify-center items-center mt-1">
              <BsPerson className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
