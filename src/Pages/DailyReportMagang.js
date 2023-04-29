import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import AddBtn from "../Components/AddBtn";
import TwinButton from "../Components/TwinButton";
import { useHistory } from "react-router-dom";
import LaporanMagangBootcamp from './LaporanMagangBootcamp';


const DailyReportMagang = () => {
  const history = useHistory();
  const handleAdd = () => {
    history.push("/daily-report-magang/laporan-magang-bootcamp");
  };
  return (
      <div className="w-full flex flex-col">
        <div className="p-8 ml-10">
          <SearchBar />
        </div>
        <AddBtn onClick={handleAdd} />
        <div className="pr-10 lg:pl-20 sm:pl-10 pt-4">
          <table className="table-auto w-full">
            <thead className={`bg-slate-gray`}>
              <tr>
                <th
                  className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}
                >
                  DATE
                </th>
                <th
                  className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}
                >
                  TASK
                </th>
                <th
                  className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}
                >
                  PROJECT
                </th>
                <th
                  className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}
                >
                  STATUS
                </th>
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
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  23 Mar 2023
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Brief pengerjaan project
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  PB Taxand
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Done
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  <TwinButton />
                </td>
              </tr>
              <tr>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  23 Mar 2023
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Brief pengerjaan project
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  PB Taxand
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Done
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  <TwinButton />
                </td>
              </tr>
              <tr>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  23 Mar 2023
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Brief pengerjaan project
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  PB Taxand
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Done
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  <TwinButton />
                </td>
              </tr>
              <tr>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  23 Mar 2023
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Brief pengerjaan project
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  PB Taxand
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Done
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  <TwinButton />
                </td>
              </tr>
              <tr>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  23 Mar 2023
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Brief pengerjaan project
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  PB Taxand
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  Done
                </td>
                <td
                  className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
                >
                  <TwinButton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   
    // <div className="w-full flex flex-col">
    //   <div className="p-8 ml-10">
    //   <SearchBar />
    //   </div>
    //   <AddBtn onClick={handleAdd}/>
    //   <div className="pr-10 lg:pl-20 sm:pl-10 pt-4">
    //         <table className="table-auto w-full">
    // <thead className={`bg-slate-gray`}>
    //     <tr>
    //     <th className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}>DATE</th>
    //     <th className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}>TASK</th>
    //     <th className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}>PROJECT</th>
    //     <th className={`font-poppins text-white font-thin lg:text-base sm:text-sm`}>STATUS</th>
    //     <th className={``}>
    //     <div className={`flex justify-center items-center p-2`}>
    //         <div className="flex flex-row justify-center items-center text-white font-thin">
    //         <FontAwesomeIcon icon={faCircleInfo} className="px-2" />
    //         <p className={`font-poppins text-lg text-white`}>/</p>
    //         <FontAwesomeIcon icon={faTrashCan} className="px-2" />
    //         </div>
    //     </div>
    //     </th>
    //     </tr>
    // </thead>
    // <tbody>
    //     <tr>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>23 Mar 2023</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Brief pengerjaan project</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>PB Taxand</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Done</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
    //     <TwinButton />
    //     </td>
    //     </tr>
    //     <tr>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>23 Mar 2023</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Brief pengerjaan project</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>PB Taxand</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Done</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
    //     <TwinButton />
    //     </td>
    //     </tr>
    //     <tr>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>23 Mar 2023</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Brief pengerjaan project</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>PB Taxand</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Done</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
    //     <TwinButton />
    //     </td>
    //     </tr>
    //     <tr>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>23 Mar 2023</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Brief pengerjaan project</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>PB Taxand</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Done</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
    //     <TwinButton />
    //     </td>
    //     </tr>
    //     <tr>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>23 Mar 2023</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Brief pengerjaan project</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>PB Taxand</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Done</td>
    //     <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
    //     <TwinButton />
    //     </td>
    //     </tr>
    // </tbody>
    //           </table>
    //     </div>
    //     </div>
  );
};

export default DailyReportMagang;
