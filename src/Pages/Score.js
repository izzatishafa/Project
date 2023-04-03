import SearchBar from "../Components/SearchBar"
import PrintBtn from "../Components/PrintBtn"

const Score = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="p-8 ml-10">
            <SearchBar />
            </div>
            <PrintBtn />
            <div className="pr-10 pl-20 pt-4">
            <table className="table-auto w-full">
                <thead className={`bg-slate-gray`}>
                    <tr>
                    <th className={`font-poppins text-white font-thin text-sm p-2 w-1/5`}>DATE</th>
                    <th className={`font-poppins text-white font-thin text-sm p-2 w-2/5`}>TASK</th>
                    <th className={`font-poppins text-white font-thin text-sm p-2 w-1/5`}>SCORE</th>
                    <th className={`font-poppins text-white font-thin text-sm p-2 w-1/5`}>SCORE NUM</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>3/23/2023</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>Membuat CRUD</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>B</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>85</td>
                </tr>
                <tr>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>3/23/2023</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>Membuat CRUD</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>B</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>85</td>
                </tr>
                <tr>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>3/23/2023</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>Membuat CRUD</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>B</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>85</td>
                </tr>
                <tr>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>3/23/2023</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>Membuat CRUD</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>B</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>85</td>
                </tr>
                <tr>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>3/23/2023</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>Membuat CRUD</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>B</td>
                    <td className={`border px-4 py-3 text-center font-poppins text-light-gray text-sm`}>85</td>
                </tr>
                </tbody>
                </table>
                </div>
        </div>
        
    )
}

export default Score