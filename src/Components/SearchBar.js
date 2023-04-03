import search from '../Assets/search.png'

function SearchBar() {
  return (
    <div>
      <div className={`flex items-center border rounded-full text-black font-poppins border-light-gray bg-white mr-2 px-6 py-2`}>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-md w-full py-1 px-2 appearance-none outline-none"
        />
        <img src={search} alt="search-icon" className="ml-2 w-5" />
      </div>
    </div>
  );
}

export default SearchBar;

