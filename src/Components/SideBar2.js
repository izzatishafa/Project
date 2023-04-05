import logo from '../Assets/logo.png'
import { FiHome } from 'react-icons/fi'
import { RiUserSettingsLine } from 'react-icons/ri'
import { FiBell } from 'react-icons/fi'
import { FiEdit } from 'react-icons/fi'
import { FiCalendar } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'
import { FiShoppingBag } from 'react-icons/fi'
import { BsCheck2Circle } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'


const SideBar2 = ({pathname}) => {
    let isTab = useMediaQuery({ query:"(max-width:768px)" })
    const location = useLocation();

    console.log(isTab, "isTab");

    // Sidebar Open State
    const [isOpen, setIsOpen] = useState(isTab ? false : true );

    const Sidebar_animation = isTab
    ? // mobile view
      {
          open : {
            x : 0,
            width: "16rem",
            transition: {
              damping: 40,
            },
          },
          closed : {
            x : -250,
            width: 0,
            transition: {
              damping: 40, 
              delay: 0.15,
            },
          },
      } 
    : {

        // System view 
        open : {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed : {
          width: "4rem",
          transition: {
            damping: 40, 
          },
        },
    };

    useEffect(() => {
        if(isTab){
            // mobile
            setIsOpen(false);
        }else{
            // laptop
            setIsOpen(true);
        }
    }, [isTab]);


    // pathname change -> close sidebar (only mobile view)
    useEffect(() => {
        isTab && setIsOpen(false);
    }, [pathname])


    return (
        <div>
            <div
            onClick={()=>setIsOpen(false)} 
            className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50
            ${isOpen ? "block" : "hidden"}`}>

            </div>
            <motion.div
            variants={Sidebar_animation}
            initial={{ x : isTab ? -250 : 0 }}
            animate={isOpen ? "open" : "closed"}
            className="bg-white text-gray z-[999] w-[14rem] max-w-
            [14rem] overflow-hidden md:relative fixed"
            >
            
            {/* Logo */}
            <div className="flex items-center gap-1 py-4 pl-3 bg-dark-blue rounded-br-lg">
                <img src={logo} alt="logo" className="pr-5 w-[4rem]" onClick={() => setIsOpen(!isOpen)} />
                <span className={`whitespace-pre text-white text-left text-md font-patua`}>INTERN<br />MANAGEMENT</span>
            </div>

            {/* Menus */}
            <div className="flex flex-col h-full">
                <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 
                font-medium overflow-x-hidden">
                    <li className="">
                    <NavLink exact to="/" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/'}>
                        <FiHome size={23} color={location.pathname === '/' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/' ? 'text-dark-blue' : 'text-light-gray'}`}>Home</p>
                    </NavLink>
                    </li>
                    <li className="">
                    <NavLink exact to="/attendance-list2" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/attendance-list2'}>
                        <BsCheck2Circle size={25} color={location.pathname === '/attendance-list2' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/attendance-list2' ? 'text-dark-blue' : 'text-light-gray'}`}>Attendance List</p>
                    </NavLink>
                    </li>
                    <li className="">
                    <NavLink exact to="/daily-report-admin" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/daily-report-admin'}>
                        <FiEdit size={23} color={location.pathname === '/daily-report-admin' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/daily-report-admin' ? 'text-dark-blue' : 'text-light-gray'}`}>Daily Report</p>
                    </NavLink>
                    </li>
                    <li className="">
                    <NavLink exact to="/score-admin" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/score-admin'}>
                        <FiShoppingBag size={23} color={location.pathname === '/score-admin' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/score-admin' ? 'text-dark-blue' : 'text-light-gray'}`}>Score</p>
                    </NavLink>
                    </li>
                    <li className="">
                    <NavLink exact to="/notifications-admin" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/notifications-admin'}>
                        <FiBell size={23} color={location.pathname === '/notifications-admin' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/notifications-admin' ? 'text-dark-blue' : 'text-light-gray'}`}>Notifications</p>
                    </NavLink>
                    </li>
                    <li className="">
                    <NavLink exact to="/agenda2" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/agenda2'}>
                        <FiCalendar size={23} color={location.pathname === '/agenda2' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/agenda2' ? 'text-dark-blue' : 'text-light-gray'}`}>Agenda</p>
                    </NavLink>
                    <NavLink exact to="/management-user" className="py-4 px-3 flex flex-row gap-6 md:cursor-pointer cursor-default duration-300" activeClassName="text-dark-blue" isActive={(match, location) => location.pathname === '/management-user'}>
                        <RiUserSettingsLine size={23} color={location.pathname === '/management-user' ? '#0A1D33' : 'gray'} className="text-dark-blue min-w-max"/>
                        <p className={`font-poppins text-[16px] font-bold ${location.pathname === '/management-user' ? 'text-dark-blue' : 'text-light-gray'}`}>User</p>
                    </NavLink>
                    </li>
                </ul>
            </div>


            {/* control button */}
            <motion.div 
            animate={
                isOpen ? {
                    x : 0,
                    y : 0,
                    rotate : 0,
                } : {
                    x : -10,
                    y : -200,
                    rotate : 180,
                }
            }
            transition={{
                duration : 0,
            }}
            onClick={() => setIsOpen(!isOpen)} 
            className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer
            md:block hidden"
            >

                <IoIosArrowBack size={25} className="text-white" />
              </motion.div>
            </motion.div>
            <div className="pl-5 pt-[35px] md:hidden" onClick={()=>setIsOpen(true)}>
                <FiMenu size={25} />
            </div>
        </div>
    )
}


export default SideBar2
































// import logo from '../Assets/logo.png'
// import home from '../Assets/home.png'
// import checkCircle from '../Assets/check-circle.png'
// import dailyReport from '../Assets/edit.png'
// import score from '../Assets/shopping-bag2.png'
// import notif from '../Assets/bell2.png'
// import agenda from '../Assets/calendar2.png'
// import user from '../Assets/user-setting.png'
// import { NavLink } from 'react-router-dom';


// const SideBar = () => {
//     return (
//         <div className="flex flex-col w-1/5 shadow-sm">
//             <div className={`w-64 py-5 px-7 flex flex-row items-center bg-dark-blue rounded-br-lg`}>
//                  <div>
//                      <img src={logo} alt="logo" className="pr-5 w-16"/>
//                  </div>
//                  <div className={`text-white text-left text-md flex flex-col font-patua`}>
//                      <p>INTERN</p>
//                      <p>MANAGEMENT</p>
//                  </div>
//              </div>             
//              <div className="bg-white p-6">
//                  <NavLink exact to="/" className="py-5 px-3 flex flex-row gap-2" activeClassName="text-dark-blue">
//                      <img src={home} alt="" className="pr-5 w-11 color-dark-blue"/>
//                      <p className={`font-poppins font-bold text-dark-blue`}>Home</p>
//                  </NavLink>
//                  <NavLink to="/attendance-list2" className="py-5 px-3 flex flex-row gap-2" activeClassName="text-dark-blue">
//                      <img src={checkCircle} alt="" className="pr-5 w-11"/>
//                      <p className={`font-poppins font-bold text-light-gray`}>Attendance List</p>
//                  </NavLink>
//                  <NavLink to="/daily-report" className="py-5 px-3 flex flex-row gap-2" activeClassName="text-dark-blue">
//                      <img src={dailyReport} alt="" className="pr-5 w-11"/>
//                      <p className={`font-poppins font-bold text-light-gray`}>Daily Report</p>
//                  </NavLink>
//                  <NavLink to="/score-admin" className="py-5 px-3 flex flex-row gap-2" activeClassName="text-dark-blue">
//                      <img src={score} alt="" className="pr-5 w-11"/>
//                      <p className={`font-poppins font-bold text-light-gray`}>Score</p>
//                  </NavLink>
//                  <NavLink to="/notification-admin" className="py-5 px-3 flex flex-row gap-2" activeClassName="text-dark-blue">
//                      <img src={notif} alt="" className="pr-5 w-11"/>
//                      <p className={`font-poppins font-bold text-light-gray`}>Notification</p>
//                  </NavLink>
//                  <NavLink to="/agenda2" className="py-5 px-3 flex flex-row gap-2" activeClassName="text-dark-blue">
//                      <img src={agenda} alt="" className="pr-5 w-11"/>
//                      <p className={`font-poppins font-bold text-light-gray`}>Agenda</p>
//                  </NavLink>
//                  <NavLink to="/management-user" className="py-5 px-3 flex flex-row gap-1" activeClassName="text-dark-blue">
//                      <img src={user} alt="" className="pr-4 w-13"/>
//                      <p className={`font-poppins font-bold text-light-gray`}>User</p>
//                  </NavLink>
//              </div>
//          </div>
//     )
// }

// export default SideBar;
















