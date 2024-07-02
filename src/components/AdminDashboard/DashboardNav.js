import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/header/logo-white.png";

const DashboardNav = () => {
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    function scrollToTop() {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <header
                className={`${bg && " bg-black shadow-md py-4"
                    }   p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
            >
                <div className="container mx-auto flex items-center justify-between">
                    {/* logo*/}
                    <Link to="">
                        <img width={70} src={Logo} alt="" />
                    </Link>
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
                                    to="/dashboard"
                                    smooth={true}
                                    offset={-120}
                                    activeClass="active"
                                    spy={true}
                                    preventScrollReset={true}
                                    onClick={scrollToTop}
                                    className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
                                >
                                    Admin  Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/allUsers"
                                    smooth={true}
                                    offset={-120}
                                    activeClass="active"
                                    spy={true}
                                    preventScrollReset={true}
                                    onClick={scrollToTop}
                                    className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
                                >
                                    All  Users
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dashboard/manageBooking"
                                    smooth={true}
                                    offset={-120}
                                    activeClass="active"
                                    spy={true}
                                    preventScrollReset={true}
                                    onClick={scrollToTop}
                                    className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
                                >
                                    Manage  Booking
                                </Link>
                            </li>
                            <li>
                                    |
                            </li>
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
                                    Back  to  Home
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default DashboardNav;
