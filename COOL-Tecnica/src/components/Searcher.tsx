import SearchImage from "../images/search-icon.png"

function Searcher() {
  return (
    <div className="w-96 h-10 flex flex-row bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl justify-center items-center">
      <input
        type="text"
        placeholder="Country, city, state..."
        className="capitalize ps-5 border-r-0 h-full bg-transparent text-left transition-colors 
              text-gray-300 text-lg flex-1 focus:outline-none placeholder:text-gray-400"
      />
      <button type="submit" className="p-1.5 rounded-full bg-slate-300 w-7 h-7 mr-2">
        <img src={SearchImage} alt="" className="w-full h-full" />
      </button>
    </div>
  );
}

export default Searcher;
