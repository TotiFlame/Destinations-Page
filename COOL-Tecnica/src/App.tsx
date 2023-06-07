import Card from './components/Card';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Destination, { getDestinationData } from './models/Destination';
import { useEffect, useState } from 'react';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(getDestinationData());
  }, []);

  function destinationFilter(destination: Destination) {
    return (
      destination.name.includes(searchInput) ||
      destination.country.includes(searchInput) ||
      destination.state.includes(searchInput) ||
      !searchInput
    );
  }
  return (
    <>
      <Header />
      <section className="h-3/4 w-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
        <div className="absolute h-3/4 w-full bg-black bg-opacity-50 top-0 flex flex-col justify-center items-center">
          <h1 className="text-gray-400 mb-2 text-lg font-medium">Search</h1>
          <Searcher value={searchInput} setValue={setSearchInput} />
        </div>
      </section>
      <section className="w-full flex justify-center bg-purple-50">
        <div className="w-10/12 grid grid-cols-3 grid-rows-3 gap-10 pt-20 justify-items-center perspective-30 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {destinations
            .filter(destinationFilter)
            .map((destination: Destination) => (
              <Card
                name={destination.name}
                country={destination.country}
                state={destination.state}
                description={destination.description}
                image={destination.image}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
