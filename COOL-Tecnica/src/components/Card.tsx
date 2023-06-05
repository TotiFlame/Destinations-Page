import { useState } from 'react';
import image from '../images/casapueblo.jpg';
import locationIcon from '../images/location.svg';
import back from '../images/back-arrow.svg';
import { Description } from '@mui/icons-material';

function Cards({
  name = '',
  country = "",
  state = "",
  description = "",
  image= "",
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative w-72 h-80 shadow-xl shadow-slate-600 rounded-3xl 
                transform transition-transform duration-700 transform-styles-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
    >
      <div className="w-full h-full absolute inset-0 backface-hidden">
        <img src={image} alt="" className="w-full h-full rounded-3xl" />
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-b
                      from-transparent via-black via-85% to-black to-90%
                      flex items-end"
        >
          <div className="relative w-full h-2/5 flex flex-col px-3 pt-2">
            <span className="text-2xl font-medium text-white capitalize">{name}</span>
            <div className="grid grid-cols-3 mt-2">
              <span className="text-slate-400 text-xs col-start-1 col-end-3 flex items-center capitalize">
                <img src={locationIcon} alt="" className="w-3 h-3 mr-1" />
                {country}, {state}
              </span>
              <button
                className="w-full h-8 bg-transparent border-2 border-orange-600 rounded-3xl text-sm font-semibold
                          text-white hover:shadow-inner hover:bg-orange-600 transition"
                onClick={handleFlip}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute rounded-3xl inset-0 backface-hidden bg-slate-800 rotate-y-180 flex flex-col">
        <span className="w-full pt-4 text-center text-base font-semibold text-white">
          Description
        </span>
        <p className="m-4 text-center text-white">
          {description}
        </p>
        <button
          className="w-8 h-8 my-3 ml-3 bg-transition border-2 border-orange-600 transition rounded-3xl text-sm font-semibold
                          text-white flex items-center justify-center hover:shadow-inner hover:bg-orange-600"
          onClick={handleFlip}
        >
          <img src={back} alt="" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Cards;
