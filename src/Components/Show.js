import { useState } from "react";


const Show = () => {
    const [showPerPage, setShowPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

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
    const currentPageUsers = users.slice(startIndex, endIndex)

    function handleShowPerPageChange(event) {
        setShowPerPage(parseInt(event.target.value));
        setCurrentPage(1);
      }
    


    return (
        <select className="pl-2 pr-3 py-2 font-poppins text-center border outline-none rounded-md" value={showPerPage} onChange={handleShowPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
    );
  }
  
export default Show