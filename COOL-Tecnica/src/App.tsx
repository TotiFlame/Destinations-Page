import Cards from './components/Card';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Destination, { getDestinationData } from './models/Destination';

function App() {
  return (
    <>
      <Header />
      <section className="h-3/4 w-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
        <div className="absolute h-3/4 w-full bg-black bg-opacity-50 top-0 flex flex-col justify-center items-center">
          <h1 className="text-gray-400 mb-2 text-lg font-medium">Search</h1>
          <Searcher />
        </div>
      </section>
      <section className="w-full flex justify-center bg-purple-50">
        <div className="w-10/12 grid grid-cols-3 grid-rows-3 gap-10 pt-20 justify-items-center perspective-30">
          {getDestinationData().map((destination : Destination) =>
          (
            <Cards name={destination.name} country={destination.country} state={destination.state} description={destination.description} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
