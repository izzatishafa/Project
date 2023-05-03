import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import AddBtn from "../Components/AddBtn";
import TwinButton from "../Components/TwinButton";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { title } from "case";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";

const DailyReportPkl = () => {
  const history = useHistory();
  const handleAdd = () => {
    history.push("/daily-report-pkl/laporan-magang-pkl");
  };
  return (
    <div className="w-full flex flex-col">
      <div className="p-8 ml-10">
        <SearchBar />
      </div>
      <AddBtn onClick={handleAdd} />
      <div className="pr-10 pl-20 pt-4">
        <table className="table-auto w-full">
          <thead className={`bg-slate-gray`}>
            <tr>
              <th
                className={`font-poppins text-white font-thin lg:text-base sm:text-xs w-1/5`}
              >
                DATE
              </th>
              <th
                className={`font-poppins text-white font-thin lg:text-base sm:text-xs w-3/5`}
              >
                ACTIVITY
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
                2023-03-23
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                Hands-on coding JavaScript
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
                2023-03-23
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                Hands-on coding JavaScript
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
                2023-03-23
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                Hands-on coding JavaScript
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
                2023-03-23
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                Hands-on coding JavaScript
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
  );
};

export default DailyReportPkl;
