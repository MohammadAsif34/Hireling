import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogin = () => {
    alert("login btn clicked !!");
  };
  return (
    <div className="w-full bg-pink-400">
      <div className="container h-16 m-auto bg-pink-400 flex items-center">
        <div className=" px-2 flex-0 text-4xl font-bold text-white">
          Hireling<span className="text-purple-700">.</span>
        </div>
        <div className="flex-1"></div>
        <div className="mx-2 flex-0">
          <Link
            to="/login"
            className="px-4 py-1 flex-0 text-pink-600 text-lg bg-white rounded-lg capitalize"
          >
            login
          </Link>
          {/* <button
            className="px-4 py-1 flex-0 text-pink-600 text-lg bg-white rounded-lg capitalize"
            onClick={handleLogin}
          >
            login
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
