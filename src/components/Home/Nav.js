import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import useAdmin from "../../hooks/useAdmin";

const Nav = () => {
  const [isAdmin] = useAdmin();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const handleSignOut = () => {
    signOutUser()
      .then(() => { })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className={`lg:flex lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-accent-hover"
        >
          Menu
        </button>
      </div>

      <ul className="lg:flex space-x-6 font-body font-semibold text-sm text-white">

        <li>
          <Link
            to="/"
            smooth={true}
            offset={-120}
            activeClass="active"
            spy={true}
            preventScrollReset={true}
            onClick={scrollToTop}
            className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            smooth={true}
            offset={-120}
            spy={true}
            preventScrollReset={true}
            onClick={scrollToTop}
            className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            smooth={true}
            offset={-120}
            spy={true}
            preventScrollReset={true}
            onClick={scrollToTop}
            className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
          >
            Menu
          </Link>
        </li>
        {
          isAdmin && <>
            <li>
              <Link
                to="/addMenu"
                smooth={true}
                offset={-120}
                spy={true}
                preventScrollReset={true}
                onClick={scrollToTop}
                className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              >
                AddMenu
              </Link>
            </li>
            <li>
              <Link
                to="/allUsers"
                smooth={true}
                offset={-120}
                spy={true}
                preventScrollReset={true}
                onClick={scrollToTop}
                className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              >
                All Users
              </Link>
            </li>
             <li>
              <Link
                to="/dashboard"
                smooth={true}
                offset={-120}
                spy={true}
                preventScrollReset={true}
                onClick={scrollToTop}
                className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              >
                Dashboard
              </Link>
            </li>
          </>
        }
        <li>
          <Link
            to="/contact"
            smooth={true}
            offset={-120}
            spy={true}
            preventScrollReset={true}
            onClick={scrollToTop}
            className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
          >
            Contact us
          </Link>
        </li>
     
        <li>
          <Link
            to="/booking"
            smooth={true}
            spy={true}
            preventScrollReset={true}
            onClick={scrollToTop}
            className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
          >
            Booking
          </Link>
        </li>


        {user ? (
          <>
            <li>
              <div className="tooltip" data-tip={user?.email}>
                <button><CgProfile className="h-6 w-6"></CgProfile></button>
              </div>

            </li>
            <li>
              <Link
                smooth={true}
                spy={true}
                preventScrollReset={true}
                onClick={handleSignOut}
                className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              >
                <AiOutlineLogout className="h-6 border-white w-6"></AiOutlineLogout>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                smooth={true}
                spy={true}
                preventScrollReset={true}
                onClick={scrollToTop}
                className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
              >
                <button className="btn btn-neutral text-white btn-sm normal-case -mt-2">
                  Login
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
