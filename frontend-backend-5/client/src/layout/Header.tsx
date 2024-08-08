import React from "react";
import { headerData } from "../constants/constants";
import { Link, NavLink, useLocation  } from "react-router-dom";

const Header = () => {

  const location  = useLocation();
  const pathname = location.pathname;
  const imagePath = pathname === '/' 
  ? `${import.meta.env.VITE_ASSETS}/img/logo1.png` 
  : `${import.meta.env.VITE_ASSETS}/img/logo2.png`;
  return (
    <header className="bg-black header">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <Link to="/">
            <img
              src={imagePath}
              className="max-w-20"
            />
          </Link>
          <div className="innerHeader">
            <ul className="flex">
              {headerData.map((val, index) => (
                <li key={val.url}>
                  <NavLink
                    to={val.url}
                    className="text-white p-2 block capitalize"
                  >
                    {val.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
