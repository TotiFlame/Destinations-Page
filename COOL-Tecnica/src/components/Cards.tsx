import image from '../images/casapueblo.jpg';

function Cards() {
    return (
      <div className="relative w-72 h-80 shadow-xl mt-20 rounded-3xl">
        <img src={image} alt="" className="w-full h-full rounded-3xl" />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white rounded-md">
        </div> */}
      </div>
    );
}

export default Cards