import React, { useContext, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import CloseIcon from "../../assets/img/close.png";

import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../Providers/AuthProvider";

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const [isAdmin] = useAdmin();

  const { user, signOutUser } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function scrollToTop() {
    window.scroll(0, 0);
  }

  const handleSignOut = () => {
    signOutUser()
      .then(() => { })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className="lg:hidden relative z-20">
      {/* menu icon */}
      <div className="">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 absolute top-0 right-0 mt-4 mr-4"
        >
          <img
            style={{
              position: "fixed",
              right: "30px",
              top: "55px",
              height: "30px",
              width: "30px",
              cursor: "pointer",
            }}
            src="https://icon-library.com/images/hamburger-menu-icon-png-white/hamburger-menu-icon-png-white-10.jpg"
            alt="Menu"
          />
        </button>
      </div>
      <ul
        className={`${isOpen ? "right-0" : "-right-full"
          } bg-dark fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg lg:hidden`}
      >
        {/* close button */}
        <button onClick={toggleMenu} className="absolute top-6 left-6">
          <img src={CloseIcon} alt="Close" />
        </button>
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
                to="/dashbard"
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
}

export default NavMobile;
