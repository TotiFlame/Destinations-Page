import SearchImage from "../images/search-icon.png"

interface SearcherProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function Searcher({value, setValue}: SearcherProps) {
  return (
    <div className="sm:w-80 lg:w-96 h-10 flex flex-row bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl justify-center items-center">
      <input
        type="text"
        className="capitalize ps-5 border-r-0 h-full bg-transparent text-left transition-colors 
              text-gray-300 text-lg flex-1 focus:outline-none placeholder:text-gray-400"
        placeholder="Country, city, state..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-1.5 rounded-full bg-slate-300 w-7 h-7 mr-2"
      >
        <img src={SearchImage} alt="" className="w-full h-full" />
      </button>
    </div>
  );
}

export default Searcher;
