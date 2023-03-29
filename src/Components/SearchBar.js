import search from '../Assets/search.png'

function SearchBar() {
  return (
    <div>
      <div className="flex items-center border rounded-full text-light-gray border-light-gray bg-white px-5 py-3 mx-20 mt-10">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm w-full py-1 px-2 appearance-none outline-none"
        />
        <img src={search} alt="search-icon" className="ml-2 w-5" />
      </div>
    </div>
  );
}

export default SearchBar;

