import SearchBar from "../Components/SearchBar"
import profile from '../Assets/pict2.jpg'

const QuickAccess = () => {
    return (
        <div className={`p-8 ml-10`}>
        <SearchBar />
        <h1 className={`text-left text-xl text-dark-blue font-bold font-poppins px-2 pt-10 pb-5`}>Quick Access</h1>
        <div className={`grid grid-cols-2 gap-12 mr-3`}>
            <div className="shadow-md rounded-md hover:shadow-xl">
                <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}>Attendance List</h1>
                <div className="flex flex-row items-center">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 ml-10 mr-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>08.00 WIB - 3/20/2023</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 ml-10 mr-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Maccaroni El Matadore</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>17.00 WIB - 3/19/2023</p>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-md hover:shadow-xl">
                <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}>Daily Report</h1>
                <div className="flex flex-row items-center ml-10 my-3">
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Membuat auth menggunakan...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>Senin 3/20/2023</p>
                    </div>
                </div>
                <div className="flex flex-row items-center ml-10 my-3">
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Membuat auth menggunakan...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>Senin 3/20/2023</p>
                    </div>
                </div>
                <div className="flex flex-row items-center ml-10 my-3">
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Membuat auth menggunakan...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>Senin 3/20/2023</p>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-md hover:shadow-xl">
                <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}>Score</h1>
                <div className="flex flex-row items-center ml-10 my-3">
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Nilai Post Test telah ditambah...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>10 minutes ago</p>
                    </div>
                </div>
                <div className="flex flex-row items-center ml-10 my-3">
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Nilai Post Test telah ditambah...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>10 minutes ago</p>
                    </div>
                </div>
                <div className="flex flex-row items-center ml-10 my-3">
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Nilai Post Test telah ditambah...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>10 minutes ago</p>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-md hover:shadow-xl">
                <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}>Notifications</h1>
                <div className="flex flex-row items-center">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 ml-10 mr-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Tole telah menyetujui...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 ml-10 mr-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Tole telah menyetujui...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>5 minutes ago</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div>
                        <img src={profile} alt="..." className="rounded-full w-11 h-11 ml-10 mr-5 my-3" />
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Tole telah menyetujui...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>5 minutes ago</p>
                    </div>
                </div>
            </div>
            <div className="shadow-md rounded-md hover:shadow-xl pb-5 mb-2">
                <h1 className={`text-left text-dark-blue font-bold font-poppins px-5 py-5 mx-5 my-5`}>Agenda</h1>
                <div className="flex flex-row items-center">
                    <div>
                        <input type="checkbox" className="items-center w-8 h-8 ml-10 mr-5 my-3"/>
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Presentasi Tugas ...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>11.40 WIB - 3/21/2023</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div>
                        <input type="checkbox" className="items-center w-8 h-8 ml-10 mr-5 my-3"/>
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Presentasi Tugas ...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>11.40 WIB - 3/21/2023</p>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div>
                        <input type="checkbox" className="items-center w-8 h-8 ml-10 mr-5 my-3"/>
                    </div>
                    <div>
                        <p className={`text-dark-gray font-poppins`}>Presentasi Tugas ...</p>
                        <p className={`text-sm text-left text-light-gray font-poppins`}>11.40 WIB - 3/21/2023</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default QuickAccess