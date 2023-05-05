import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import AddBtn from "../Components/AddBtn";
import DetailDeleteButton from "../Components/DetailDeleteButton";
import { useHistory } from "react-router-dom";
import moment from "moment";
import {title} from "case";
import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";


const DailyReportMagang = () => {
  const history = useHistory();
  const handleAdd = () => {
    history.push("/daily-report-magang/laporan-magang-bootcamp");
  };
  const [showPerPage, setShowPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [agenda, setAgenda] = useState([]);
  const [data, setData] = useState([]);

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("student_assignment_report")
      .delete()
      .eq("some_column", "someValue");
  };

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const totalPages = Math.ceil(data.length / showPerPage);

  const startIndex = (currentPage - 1) * showPerPage;
  const endIndex = startIndex + showPerPage;
  const currentPageUsers = data.slice(startIndex, endIndex);
  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    const { data:dataSession } = await supabase.auth.getSession();
    let { data, error } = await supabase
      .from("student_assignment_report")
      .select("*")
      .eq("student_id", dataSession.session.user.id);
    setData(data);
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
          {currentPageUsers.map((item) => (
            <tr key={item.id}>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                {moment(item.created_at, "YYYY-MM-DD").format("DD MMM YYYY")}
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                {item.title}
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                {item.project}
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                {title(item.status)}
              </td>
              <td
                className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}
              >
                <DetailDeleteButton />
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center space-x-2 mt-10 mb-5 mr-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button key={pageNumber} className={`px-2 py-1 font-poppins font-bold rounded-md ${currentPage === pageNumber ? 'text-black' : 'text-light-gray'}`} onClick={() => handlePageChange(pageNumber)}>
          {pageNumber}
        </button>
      ))}
    </div>
    </div>
  );
};

export default DailyReportMagang;
