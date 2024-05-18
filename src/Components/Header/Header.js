import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useLocation, Navigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { AuthContext } from "../auth/AuthContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const navBarList = [
    { _id: 1, title: "Home", link: "/" },
    { _id: 2, title: "About", link: "/about" },
    { _id: 3, title: "Services", link: "/services" },
    { _id: 4, title: "Blog", link: "/blog" },
    { _id: 5, title: "Packages", link: "/packages" },
    { _id: 6, title: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  const handleLogout = () => {
    logout(); // Logout the user
    setSidenav(false); // Close the side navigation if it's open
  };

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <img
                className="w-80 object-cover"
                src="https://almaherublquran.com/wp-content/uploads/2024/01/logo-amq-2.png"
                alt="logo"
              />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-1 mr-8"
              >
                {user ? (
                  <>
                    {navBarList.map(({ _id, title, link }) => (
                      <NavLink
                        key={_id}
                        className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                        to={link}
                        state={{ data: location.pathname.split("/")[1] }}
                      >
                        {title}
                      </NavLink>
                    ))}
                    <div className="mr-4 flex justify-center items-center">
                      {user.photoURL ? (
                        <img
                          className="w-10 h-10 rounded-full"
                          src={user.photoURL}
                          alt="Profile"
                        />
                      ) : (
                        <div className="w-10 h-10 m-4 flex items-center ml-4 justify-center bg-blue-700 text-white rounded-full">
                          {user.email.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <button
                        onClick={handleLogout}
                        className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 items-center justify-center py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <Navigate
                    to="/signin"
                    replace
                  />
                )}
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <Link to="/">
                      <div>
                        <img
                          className="w-40 object-cover"
                          src="https://almaherublquran.com/wp-content/uploads/2024/01/logo-amq-2.png"
                          alt="logo"
                        />
                      </div>
                    </Link>
                    <ul className="text-gray-100 flex flex-col gap-4">
                      {navBarList.map((item) => (
                        <li
                          className="font-semibold hover:font-bold items-center text-xl text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
