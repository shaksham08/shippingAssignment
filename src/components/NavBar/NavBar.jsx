import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center text-lg">
          <span className="rounded bg-indigo-500 px-2 py-1 text-sm font-bold uppercase">
            Shipping Calculator
          </span>
        </a>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <Link to="/add">Add data</Link>
          <Link to="/table-list">Table</Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
