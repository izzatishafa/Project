import SearchBar from "../Components/SearchBar"
import Show from "../Components/Show"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import TwinButton from "../Components/TwinButton"


const ManagementAgenda = () => {
    return (
        <div className="w-full flex flex-col">
        <div className="p-8 ml-10">
        <SearchBar />
        </div>
        <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center px-14 py-5 gap-2 pl-20">
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Management Agenda</p>
        </div>
        <div className="flex flex-row items-center gap-4 pr-10">
            <p className={`font-poppins text-md`}>Show</p>
            <Show />
        </div>
        </div>
        <div className="pr-10 pl-20 pt-4 pb-10">
                <table className="table-auto w-full">
                    <thead className={`bg-slate-gray`}>
                        <tr>
                        <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>DATE</th>
                        <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>AGENDA</th>
                        <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>STATUS</th>
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
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>4/3/2023</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Presentasi Tugas Akhir Mini Project</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Belum Terlaksana</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>4/1/2023</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Presentasi Tugas Akhir Mini Project</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Terlaksana</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>4/1/2023</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Presentasi Tugas Akhir Mini Project</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Terlaksana</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>4/1/2023</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Presentasi Tugas Akhir Mini Project</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Terlaksana</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
                        <TwinButton />
                        </td>
                        </tr>
                        <tr>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>4/1/2023</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Presentasi Tugas Akhir Mini Project</td>
                        <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Terlaksana</td>
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

export default ManagementAgenda