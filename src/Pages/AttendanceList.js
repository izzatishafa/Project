import profile from '../Assets/pict2.jpg'
import DoughnutChart from '../Components/AttendanceChart'
import PresentBtn from '../Components/PresentBtn'
import Sakit from '../Components/SakitBtn'
import Izin from '../Components/IzinBtn'
import { useHistory } from "react-router-dom";
 

const AttendanceList = () => {
    const history = useHistory();
    const handleGoToSickForm = () => {
        history.push("/attendance-list/presensi-sakit");
    }
    const handleGoToAbsentForm = () => {
        history.push("/attendance-list/presensi-izin");
    }
    

    return (
        <div className="w-full">
            <div className={`grid grid-cols-1 gap-4 ml-20 mr-10 my-10 pb-10 shadow-md rounded-md`}>
                <div className="flex flex-col">
                    <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-2`}>Bilik Presensi</h1>
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            <img src={profile} alt="..." className="rounded-full w-24 h-24 mx-5 my-3" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className={`font-poppins text-xl text-dark-gray font-extrabold`}>Maccaroni El Matadore</p>
                            <p className={`font-poppins font-thin text-lg text-dark-gray`}>SMK Negeri 14 Purwokerto</p>
                            <p className={`font-poppins text-base text-dark-gray`}>Magang Bootcamp</p>
                            <p className={`font-poppins text-sm text-dark-gray`}>Front-End</p>
                            <p className={`font-poppins text-xs text-dark-gray`}>Waktu masuk terekam: <span><b>09.00 WIB</b></span></p>
                            <PresentBtn />
                            <p className={`text-red text-sm font-poppins`}>Keterangan tidak masuk</p>
                            <div className="flex flex-row gap-3 items-center justify-center my-2">
                            <Sakit onClick={handleGoToSickForm} />
                            <Izin onClick={handleGoToAbsentForm} />                        
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            <div className={`grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ml-20 mr-10 my-10`}>
                <div className="shadow-md rounded-md">
                    <h1 className={`text-dark-blue text-left font-poppins font-bold px-5 py-5 mx-5 my-2`}>Riwayat Kehadiran</h1>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 20 Mar 2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 20 Mar 2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 20 Mar 2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 20 Mar 2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 20 Mar 2023</p>
                    </div>
                    </div>
                </div>
                <div className="shadow-md rounded-md">
                    <h1 className={`text-dark-blue text-left font-poppins font-bold px-5 py-5 mx-5 my-2`}>Presentase Kehadiran</h1>
                    <div className="flex justify-center items-center">
                    <DoughnutChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendanceList