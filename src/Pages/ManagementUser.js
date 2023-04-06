import SearchBar from "../Components/SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import TwinButton from "../Components/TwinButton"
import AddBtn from "../Components/AddBtn"
import profile from "../Assets/pict2.jpg"
import { useState } from 'react'


// const ManagementUser = () => {
//     return (
//         <div className="w-full flex flex-col">
            // <div className="p-8 ml-10">
            // <SearchBar />
            // </div>
//             <div className="flex flex-row justify-end items-center gap-4 pt-5">
//                 <p className={`font-poppins text-md`}>Show</p>
//                 <Show />
//                 <AddBtn />
//             </div>
//             <div className="pr-10 pl-20 pt-4 pb-10">
//                 <table className="table-auto w-full">
//                     <thead className={`bg-slate-gray`}>
//                         <tr>
//                         <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>USER</th>
//                         <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>CATEGORY</th>
//                         <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin`}>ROLE</th>
                        // <th className={``}>
                        // <div className={`flex justify-center items-center p-2`}>
                        //     <div className="flex flex-row justify-center items-center text-white font-thin">
                        //     <FontAwesomeIcon icon={faCircleInfo} className="px-2" />
                            // <p className={`font-poppins text-lg text-white`}>/</p>
                        //     <FontAwesomeIcon icon={faTrashCan} className="px-2" />
                        //     </div>
                        // </div>
                        // </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                         <tr>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <div className="flex flex-row items-center justify-start">
//                             <div>
//                                 <img src={profile} alt="..." className="rounded-full lg:w-9 lg:h-9 mr-5 my-3 ml-3 hidden lg:block" />
//                             </div>
//                             <div>
//                                 <p className={`text-dark-gray font-poppins`}>Fatima Rusalka</p>
//                             </div>
//                         </div>
//                         </td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Magang PKL</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>Back-End Developer</td>
//                         <td className={`border px-4 py-2 text-center font-poppins text-light-gray text-sm`}>
//                         <TwinButton />
//                         </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default ManagementUser





function ManagementUser() {
  const [showPerPage, setShowPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  
  function handleShowPerPageChange(event) {
    setShowPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const users = [
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
    { USER: 'Fatima Rusalka', CATEGORY: 'Magang PKL', ROLE: 'Back-End Developer' },
  ];

  const totalPages = Math.ceil(users.length / showPerPage);

  const startIndex = (currentPage - 1) * showPerPage;
  const endIndex = startIndex + showPerPage;
  const currentPageUsers = users.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col">
    <div className="p-8 ml-10">
        <SearchBar />
    </div>
    <div className="flex flex-row items-center justify-end gap-4 mb-4 pt-5">
        <div className="gap-2">
        <label className="mr-2 font-poppins">Show :</label>
         <select className="pl-1 pr-2 py-1.5 font-poppins text-center border outline-none rounded-md" value={showPerPage} onChange={handleShowPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        </div>
        <AddBtn />
    </div>
    <div className="pr-10 pl-20 pt-4">
    <table className="w-full border-collapse">
      <thead className={`bg-slate-gray`}>
        <tr>
          <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}>USER</th>
          <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}>CATEGORY</th>
          <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2`}>ROLE</th>
          <th className={`font-poppins text-white lg:text-base sm:text-sm font-thin p-2 flex flex-row items-center justify-center gap-2`}>
          <FontAwesomeIcon icon={faCircleInfo} className="" />
          <p className={`font-poppins text-lg text-white`}>/</p>
          <FontAwesomeIcon icon={faTrashCan} className="" />
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {currentPageUsers.map((user) => (
          <tr key={user.id}>
            <td className="flex items-center border p-5 text-center font-poppins text-light-gray text-sm">
            <img src={profile} alt="profile" className="rounded-full lg:w-9 lg:h-9 mr-5 ml-3 hidden lg:block"/>
            {user.USER}</td>
            <td className="border p-2 text-center font-poppins text-light-gray text-sm">{user.CATEGORY}</td>
            <td className="border p-2 text-center font-poppins text-light-gray text-sm">{user.ROLE}</td>
            <td classname="border p-2 border-red"><TwinButton /></td>
          </tr>
        ))} */}
        {currentPageUsers.map((user) => (
        <tr key={user.id}>
            <td className="flex items-center border p-5 text-center font-poppins text-light-gray text-sm">
            <img src={profile} alt="profile" className="rounded-full lg:w-9 lg:h-9 mr-5 ml-3 hidden lg:block"/>
            {user.USER}
            </td>
            <td className="border p-2 text-center font-poppins text-light-gray text-sm">{user.CATEGORY}</td>
            <td className="border p-2 text-center font-poppins text-light-gray text-sm">{user.ROLE}</td>
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

export default ManagementUser
