import search from '../Assets/search.png'

function SearchBar() {
  return (
    <div>
      <div className={`flex items-center border rounded-full text-black font-poppins lg:text-base sm:text-sm border-light-gray bg-white mr-2 lg:px-6 sm:px-3 lg:py-2 sm:py-1`}>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-md w-full py-1 px-2 appearance-none outline-none"
        />
        <button>
          <img src={search} alt="search-icon" className="ml-2 w-5" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

