import SearchBar from "../Components/SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import TwinButton from "../Components/DetailDeleteButton"
import { useState } from 'react';


function ManagementAgenda() {
    const [showPerPage, setShowPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    
    function handleShowPerPageChange(event) {
      setShowPerPage(parseInt(event.target.value));
      setCurrentPage(1);
    }
  
    function handlePageChange(pageNumber) {
      setCurrentPage(pageNumber);
    }
  
    const agenda = [
      { DATE: '2023-03-04', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Belum Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' },
      { DATE: '2023-03-01', AGENDA: 'Presentasi Tugas Akhir Mini Project', STATUS: 'Terlaksana' }
    ];
  
    const totalPages = Math.ceil(agenda.length / showPerPage);
  
    const startIndex = (currentPage - 1) * showPerPage;
    const endIndex = startIndex + showPerPage;
    const currentPageUsers = agenda.slice(startIndex, endIndex);
  
    return (
      <div className="flex flex-col">
      <div className="p-8 ml-10">
          <SearchBar />
      </div>
      <div className="flex flex-row items-center justify-between gap-4 mb-4 pt-5">
        <div className="flex flex-row items-center px-14 py-5 gap-2 pl-20">
            <FontAwesomeIcon icon={faChevronLeft} />
            <p className={`text-left text-lg text-dark-blue font-bold font-poppins`}>Management Agenda</p>
        </div>
        <div className="flex justify-end items-center mr-10">
          <label className="mr-2 font-poppins">Show :</label>
          <select className="pl-1 pr-2 py-1.5 font-poppins text-center border outline-none rounded-md" value={showPerPage} onChange={handleShowPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div className="pr-10 pl-20 pt-4">
      <table className="w-full border-collapse">
        <thead className={`bg-slate-gray`}>
          <tr>
            <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}>DATE</th>
            <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}>AGENDA</th>
            <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}>STATUS</th>
            <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2 flex flex-row items-center justify-center gap-2`}>
            <FontAwesomeIcon icon={faCircleInfo} className="" />
            <p className={`font-poppins text-lg text-white`}>/</p>
            <FontAwesomeIcon icon={faTrashCan} className="" />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageUsers.map((agenda) => (
          <tr key={agenda.id}>
              <td className="border p-5 text-center font-poppins text-light-gray text-sm">{agenda.DATE}</td>
              <td className="border p-2 text-center font-poppins text-light-gray text-sm">{agenda.AGENDA}</td>
              <td className="border p-2 text-center font-poppins text-light-gray text-sm">{agenda.STATUS}</td>
              <td className="border"><TwinButton /></td>
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
    )
  }
  
  export default ManagementAgenda