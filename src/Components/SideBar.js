import logo from '../Assets/logo.png'
import home from '../Assets/home.png'
import checkCircle from '../Assets/check-circle.png'
import dailyReport from '../Assets/edit.png'
import score from '../Assets/shopping-bag2.png'
import notif from '../Assets/bell2.png'
import agenda from '../Assets/calendar2.png'
import Pict from "../Components/Pict"
// import { ReactComponent as home } from '../Assets/home.svg'


const SideBar = () => {
    return (
        <div className="flex flex-col w-60 h-screen">
            <div className={`py-3 px-5 flex flex-row bg-dark-blue rounded-br-lg`}>
                <div>
                    <img src={logo} alt="logo" className="pr-5 w-16"/>
                </div>
                <div className={`text-white text-left flex flex-col font-patua`}>
                    <p>INTERN</p>
                    <p>MANAGEMENT</p>
                </div>
            </div>
            <div className="bg-white">
                <div className="py-5 px-8 flex flex-row">
                    <img src={home} alt="" className="pr-5 w-11 color-dark-blue"/>
                    <p className={`font-poppins font-bold text-dark-blue`}>Home</p>
                </div>
                <div className="py-5 px-8 flex flex-row">
                    <img src={checkCircle} alt="" className="pr-5 w-11"/>
                    <p className={`font-poppins font-bold text-light-gray`}>Attendance List</p>
                </div>
                <div className="py-5 px-8 flex flex-row">
                    <img src={dailyReport} alt="" className="pr-5 w-11"/>
                    <p className={`font-poppins font-bold text-light-gray`}>Daily Report</p>
                </div>
                <div className="py-5 px-8 flex flex-row">
                    <img src={score} alt="" className="pr-5 w-11"/>
                    <p className={`font-poppins font-bold text-light-gray`}>Score</p>
                </div>
                <div className="py-5 px-8 flex flex-row">
                    <img src={notif} alt="" className="pr-5 w-11"/>
                    <p className={`font-poppins font-bold text-light-gray`}>Notification</p>
                </div>
                <div className="py-5 px-8 flex flex-row">
                    <img src={agenda} alt="" className="pr-5 w-11"/>
                    <p className={`font-poppins font-bold text-light-gray`}>Agenda</p>
                </div>
                <div className={`py-5 text-dark-blue text-center font-poppin font-extrabold`}>
                <p>WHAT ARE YOU</p>
                <p>GOING TODAY?</p>
                </div>
                <Pict />
            </div>
        </div>
    )
}

export default SideBar