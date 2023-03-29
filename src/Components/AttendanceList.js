import profile from '../Assets/pict2.jpg'
import DoughnutChart from './AttendanceChart'
 

const AttendanceList = () => {
    return (
        <div>
            <div class={`grid grid-cols-1 gap-4 mx-20 my-10 pb-10 shadow-md rounded-md`}>
                <div className="flex flex-col">
                    <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-2`}>Bilik Presensi</h1>
                    <div className="flex flex-col items-center justify-center">
                        <div>
                            <img src={profile} alt="..." className="rounded-full w-24 h-24 mx-5 my-3" />
                        </div>
                        <div>
                            <p className={`font-poppins text-xl text-dark-gray font-extrabold`}>Maccaroni El Matadore</p>
                            <p className={`font-poppins font-thin text-lg text-dark-gray`}>SMK Negeri 14 Purwokerto</p>
                            <p className={`font-poppins text-base text-dark-gray`}>Magang Bootcamp</p>
                            <p className={`font-poppins text-sm text-dark-gray`}>Front-End</p>
                            <p className={`font-poppins text-xs text-dark-gray`}>Waktu masuk terekam: <span><b>09.00 WIB</b></span></p>
                            <button className={`p-1 my-2 w-64 bg-light-blue rounded-md text-white font-poppins hover:bg-hv-light-blue`}>Present</button>
                            <p className={`text-red text-sm font-poppins`}>Keterangan tidak masuk</p>
                            <div className="flex flex-row gap-3 items-center justify-center my-2">
                                <button className={`text-red font-poppins border border-red rounded-md py-2 px-5 hover:bg-red hover:text-white`}>Sakit</button>
                                <button className={`text-red font-poppins border border-red rounded-md py-2 px-5 hover:bg-red hover:text-white`}>Izin</button>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            <div class={`grid grid-cols-2 gap-4 mx-20 my-10`}>
                <div className="shadow-md rounded-md">
                    <h1 className={`text-dark-blue text-left font-poppins font-bold px-5 py-5 mx-5 my-2`}>Riwayat Kehadiran</h1>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 3/20/2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 3/20/2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 3/20/2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 3/20/2023</p>
                    </div>
                    </div>
                    <div className="flex flex-row items-center pl-5">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 mx-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins font-thin`}>17.00 WIB - 3/20/2023</p>
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