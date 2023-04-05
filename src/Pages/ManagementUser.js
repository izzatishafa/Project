import SearchBar from "../Components/SearchBar"
import Show from "../Components/Show"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import TwinButton from "../Components/TwinButton"
import AddBtn from "../Components/AddBtn"
import profile from "../Assets/pict2.jpg"


const ManagementUser = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="p-8 ml-10">
            <SearchBar />
            </div>
            <div className="flex flex-row justify-end items-center gap-4 pt-5">
                <p className={`font-poppins text-md`}>Show</p>
                <Show />
                <AddBtn />
            </div>
            <div className="pr-10 pl-20 pt-4 pb-10">
                <table className="table-auto w-full">
                    <thead className={`bg-slate-gray`}>
                        <tr>
                        <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>USER</th>
                        <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>CATEGORY</th>
                        <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>ROLE</th>
                        <th className={``}>
                        <div className={`flex justify-center items-center p-2`}>
                            <div className="flex flex-row justify-center items-center text-white font-thin">
                            <FontAwesomeIcon icon={faCircleInfo} className="px-2" />
                            <p className={`font-poppins text-lg text-white`}>/</p>
                            <FontAwesomeIcon icon={faTrashCan} className="px-2" />
                            </div>
                        </div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <div className="flex flex-row items-center justify-start">
                            <div>
                                <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
                            </div>
                            <div>
                                <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
                            </div>
                        </div>
                        </td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManagementUser
