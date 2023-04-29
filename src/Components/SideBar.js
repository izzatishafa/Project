import Pict from "./Pict";
import logo from "../Assets/logo.png";
import "../index.css";
import { FiHome } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SideBar = ({ pathname }) => {
  let isTab = useMediaQuery({ query: "(max-width:768px)" });
  const location = useLocation();

  console.log(isTab, "isTab");
  
  // Sidebar Open State
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  const Sidebar_animation = isTab
    ? // mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // System view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // laptop
      setIsOpen(true);
    }
  }, [isTab]);

  // pathname change -> close sidebar (only mobile view)
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);
  const parentPath = "/"+ location.pathname.split("/")[1]
  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50
            ${isOpen ? "block" : "hidden"}`}
      ></div> 
      <motion.div
        variants={Sidebar_animation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className={`bg-white text-gray z-[999] w-[14rem] max-w-
        [14rem] overflow-hidden md:relative fixed ${
          isTab && !isOpen ? "sidebar-closed" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-1 py-4 pl-3 bg-dark-blue rounded-br-lg">
          <img
            src={logo}
            alt="logo"
            className="pr-5 w-[4rem]"
            onClick={() => setIsOpen(!isOpen)}
          />
          <span
            className={`whitespace-pre text-white text-left text-md font-patua`}
          >
            INTERN
            <br />
            MANAGEMENT
          </span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          <ul
            className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 
                font-medium overflow-x-hidden"
          >
            <li className="">
              <NavLink
                exact
                to="/dashboard"
                className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300"
                activeClassName="text-dark-blue"
                isActive={(match, location) => parentPath ===  "/dashboard"}
              >
                <FiHome
                  size={23}
                  color={parentPath ===  "/dashboard" ? "#0A1D33" : "gray"}
                  className="text-dark-blue min-w-max"
                  title="Home"
                />
                <p
                  className={`font-poppins text-[16px] font-bold ${
                    parentPath ===  "/dashboard"
                      ? "text-dark-blue"
                      : "text-light-gray"
                  }`}
                >
                  Home
                </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/attendance-list"
                className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300"
                activeClassName="text-dark-blue"
                isActive={(match, location) =>
                  parentPath ===  "/attendance-list"
                }
              >
                <BsCheck2Circle
                  size={25}
                  color={
                    parentPath ===  "/attendance-list"
                      ? "#0A1D33"
                      : "gray"
                  }
                  className="text-dark-blue min-w-max"
                  title="Attendance List"
                />
                <p
                  className={`font-poppins text-[16px] font-bold ${
                    parentPath ===  "/attendance-list"
                      ? "text-dark-blue"
                      : "text-light-gray"
                  }`}
                >
                  Attendance List
                </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/daily-report-magang"
                className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300"
                activeClassName="text-dark-blue"
                isActive={(match, location) =>
                  parentPath ===  "/daily-report-magang"
                }
              >
                <FiEdit
                  size={23}
                  color={
                    parentPath ===  "/daily-report-magang"
                      ? "#0A1D33"
                      : "gray"
                  }
                  className="text-dark-blue min-w-max"
                  title="Daily Report"
                />
                <p
                  className={`font-poppins text-[16px] font-bold ${
                    parentPath ===  "/daily-report-magang"
                      ? "text-dark-blue"
                      : "text-light-gray"
                  }`}
                >
                  Daily Report
                </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/score"
                className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300"
                activeClassName="text-dark-blue"
                isActive={(match, location) => parentPath ===  "/score"}
              >
                <FiShoppingBag
                  size={23}
                  color={parentPath ===  "/score" ? "#0A1D33" : "gray"}
                  className="text-dark-blue min-w-max"
                  title="Score"
                />
                <p
                  className={`font-poppins text-[16px] font-bold ${
                    parentPath ===  "/score"
                      ? "text-dark-blue"
                      : "text-light-gray"
                  }`}
                >
                  Score
                </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/notifications"
                className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300"
                activeClassName="text-dark-blue"
                isActive={(match, location) =>
                  parentPath ===  "/notifications"
                }
              >
                <FiBell
                  size={23}
                  color={
                    parentPath ===  "/notifications" ? "#0A1D33" : "gray"
                  }
                  className="text-dark-blue min-w-max"
                  title="Notifications"
                />
                <p
                  className={`font-poppins text-[16px] font-bold ${
                    parentPath ===  "/notifications"
                      ? "text-dark-blue"
                      : "text-light-gray"
                  }`}
                >
                  Notifications
                </p>
              </NavLink>
            </li>
            <li className="">
              <NavLink
                exact
                to="/agenda"
                className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300"
                activeClassName="text-dark-blue"
                isActive={(match, location) => parentPath ===  "/agenda"}
              >
                <FiCalendar
                  size={23}
                  color={parentPath ===  "/agenda" ? "#0A1D33" : "gray"}
                  className="text-dark-blue min-w-max"
                  title="Agenda"
                />
                <p
                  className={`font-poppins text-[16px] font-bold ${
                    parentPath ===  "/agenda"
                      ? "text-dark-blue"
                      : "text-light-gray"
                  }`}
                >
                  Agenda
                </p>
              </NavLink>
              <div className="pl-5 hidden lg:block lg:w-[240px]">
                <Pict />
              </div>
            </li>
          </ul>
        </div>

        {/* control button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer
            md:block hidden"
        >
          <IoIosArrowBack size={25} className="text-white" />
        </motion.div>
      </motion.div>
      <div className="pl-5 pt-[35px] md:hidden" onClick={() => setIsOpen(true)}>
        <FiMenu size={25} />
      </div>
    </div>
  );
};

export default SideBar;

// const SideBar = () => {
// const location = useLocation();

//     return (
//         <div className="flex flex-col w-1/5 shadow-sm">
//             <div className={`w-64 py-5 px-7 flex flex-row items-center bg-dark-blue rounded-br-lg`}>
//                 <div>
//                     <img src={logo} alt="logo" className="pr-5 w-16"/>
//                 </div>
//                 <div className={`text-white text-left text-md flex flex-col font-patua`}>
//                     <p>INTERN</p>
//                     <p>MANAGEMENT</p>
//                 </div>
//             </div>
//             <div className="bg-white p-6">
// <NavLink exact to="/" className="py-5 px-3 flex flex-row gap-6" activeClassName="text-dark-blue" isActive={(match, location) => parentPath ===  '/'}>
//     <FiHome size={24} color={parentPath ===  '/' ? '#0A1D33' : 'gray'} className="text-dark-blue"/>
//     <p className={`font-poppins font-bold ${parentPath ===  '/' ? 'text-dark-blue' : 'text-light-gray'}`}>Home</p>
// </NavLink>
//                 <NavLink to="/attendance-list" className="py-5 px-2.5 flex flex-row gap-6" activeClassName="text-dark-blue" isActive={(match, location) => parentPath ===  '/attendance-list'}>
//                     <BsCheck2Circle size={25} color={parentPath ===  '/attendance-list' ? '#0A1D33' : 'gray'} className="text-dark-blue"/>
//                     <p className={`font-poppins font-bold ${parentPath ===  '/attendance-list' ? 'text-dark-blue' : 'text-light-gray'}`}>Attendance List</p>
//                 </NavLink>
//                 <NavLink to="/daily-report-magang" className="py-5 px-3 flex flex-row gap-6" activeClassName="text-dark-blue" isActive={(match, location) => parentPath ===  '/daily-report-magang'}>
//                     <FiEdit size={23} color={parentPath ===  '/daily-report-magang' ? '#0A1D33' : 'gray'} className="text-dark-blue"/>
//                     <p className={`font-poppins font-bold ${parentPath ===  '/daily-report-magang' ? 'text-dark-blue' : 'text-light-gray'}`}>Daily Report</p>
//                 </NavLink>
//                 <NavLink to="/score" className="py-5 px-3 flex flex-row gap-6" activeClassName="text-dark-blue" isActive={(match, location) => parentPath ===  '/score'}>
//                     <FiShoppingBag size={23} color={parentPath ===  '/score' ? '#0A1D33' : 'gray'} className="text-dark-blue"/>
//                     <p className={`font-poppins font-bold ${parentPath ===  '/score' ? 'text-dark-blue' : 'text-light-gray'}`}>Score</p>
//                 </NavLink>
//                 <NavLink to="/notifications" className="py-5 px-3 flex flex-row gap-6" activeClassName="text-dark-blue" isActive={(match, location) => parentPath ===  '/notifications'}>
//                     <FiBell size={23} color={parentPath ===  '/notifications' ? '#0A1D33' : 'gray'} className="text-dark-blue"/>
//                     <p className={`font-poppins font-bold ${parentPath ===  '/notifications' ? 'text-dark-blue' : 'text-light-gray'}`}>Notifications</p>
//                 </NavLink>
//                 <NavLink to="/agenda" className="py-5 px-3 flex flex-row gap-6" activeClassName="text-dark-blue" isActive={(match, location) => parentPath ===  '/agenda'}>
//                     <FiCalendar size={23} color={parentPath ===  '/agenda' ? '#0A1D33' : 'gray'} className="text-dark-blue"/>
//                     <p className={`font-poppins font-bold ${parentPath ===  '/agenda' ? 'text-dark-blue' : 'text-light-gray'}`}>Agenda</p>
//                 </NavLink>
// <Pict />
//              </div>
//          </div>
//     )
// }

// export default SideBar;
