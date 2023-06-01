import Cards from './components/Card';
import Searcher from './components/Searcher';

function App() {
  return (
    <>
      <section className="h-3/4 w-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
        <div className="absolute h-3/4 w-full bg-black bg-opacity-50 top-0 flex flex-col justify-center items-center">
          <span></span>
          <Searcher />
        </div>
      </section>
      <section className="w-full flex justify-center bg-purple-50">
        <div className="w-10/12 grid grid-cols-3 grid-rows-3 justify-items-center perspective-30">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </>
  );
}

export default App;
