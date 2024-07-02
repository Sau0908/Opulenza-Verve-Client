import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/header/logo-white.png";
import Nav from "../Home/Nav";
import NavMobile from "../Home/NavMobile";

const HeaderForRoute = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <div>
      <header
        className={`${
          bg && " bg-black shadow-md py-4"
        }   p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* logo*/}
          <Link to="">
            <img width={70} src={Logo} alt="" />
          </Link>
          {/* NAV*/}
          <Nav />
          {/* nav mobile */}
          <NavMobile />
        </div>
      </header>
    </div>
  );
};

export default HeaderForRoute;
