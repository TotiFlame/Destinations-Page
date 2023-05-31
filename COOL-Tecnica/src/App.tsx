import searchImage from './images/first-image.jpg';
import Cards from './components/Cards';
import Searcher from './components/Searcher';

function App() {
  return (
    <>
      <section className="h-3/4 w-full ">
        <img src={searchImage} alt="" className="w-full h-full blur-[1px]" />
        <div className="absolute h-3/4 w-full bg-black bg-opacity-50 top-0 flex flex-col justify-center items-center">
          <Searcher />
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="w-10/12 grid grid-cols-3 grid-rows-3 justify-items-center">
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
