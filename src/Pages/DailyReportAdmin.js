import SearchBar from "../Components/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import DetailBtn from "../Components/DetailBtn";
import { useState, useEffect } from "react";
import moment from "moment";
import { supabase } from "../supabaseClient";

const DailyReportAdmin = () => {
  const [showPerPage, setShowPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [agenda, setAgenda] = useState([]);
  const [data, setData] = useState([]);

  function handleShowPerPageChange(event) {
    setShowPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  }

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
    let { data, error } = await supabase
      .from("student_assignment_report")
      .select("*");
    setData(data)
  };

  return (
    <div className="flex flex-col">
      <div className="p-8 ml-10">
        <SearchBar />
      </div>
      <div className="flex justify-end items-center mr-10">
        <label className="mr-2 font-poppins">Show :</label>
        <select
          className="pl-1 pr-2 py-1.5 font-poppins text-center border outline-none rounded-md"
          value={showPerPage}
          onChange={handleShowPerPageChange}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="pr-10 pl-20 pt-4">
        <table className="w-full border-collapse">
          <thead className={`bg-slate-gray`}>
            <tr>
              <th
                className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}
              >
                DATE
              </th>
              <th
                className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}
              >
                NAME
              </th>
              <th
                className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}
              >
                ACTIVITY
              </th>
              <th
                className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2 flex flex-row items-center justify-center gap-2`}
              >
                <FontAwesomeIcon icon={faCircleInfo} className="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPageUsers.map((item) => (
              <tr key={item.id}>
                <td className="border p-5 text-center font-poppins text-light-gray text-sm">
                  {moment(item.created_at, "YYYY-MM-DD").format("DD MMM YYYY")}
                </td>
                <td className="border p-2 text-center font-poppins text-light-gray text-sm">
                  {item.name}
                </td>
                <td className="border p-2 text-center font-poppins text-light-gray text-sm">
                  {item.activity}
                </td>
                <td className="border">
                  <DetailBtn data={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center space-x-2 mt-10 mb-5 mr-10">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`px-2 py-1 font-poppins font-bold rounded-md ${
                currentPage === pageNumber ? "text-black" : "text-light-gray"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DailyReportAdmin;