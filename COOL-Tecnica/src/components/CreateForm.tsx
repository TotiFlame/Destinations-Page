import Cards from './Card';
import Destination from '../models/Destination';
import { useState } from 'react';

type CreateFormProps = {
  visible?: boolean;
  onClose: () => void;
};

function save() {
  const destinations = new Destination(
    undefined,
    'Punta mi gorda',
    'Uruguay',
    'Maldonado',
    'Bjsadjaisdjsaijdisadjsiaodoisaidsa',
    'punta.jpg'
  );

  destinations.storeData();
}

function CreateForm({ visible = false, onClose }: CreateFormProps) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [description, setDescription] = useState('');

  const handleOnClose = (e: any) => {
    if (e.target.id === 'containerForm') onClose();
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  if (!visible) return null;

  return (
    <div
      id="containerForm"
      className="fixed inset-0 z-20 h-full w-full bg-black bg-opacity-60
      backdrop-blur-sm top-0 flex flex-col justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="relative bg-purple-50 rounded p-2 w-3/4 h-3/4 flex flex-row items-center justify-around">
        <h2 className="absolute font-semibold text-lg my-3 text-slate-700 top-0">
          New Destination
        </h2>
        <div className="w-72 h-80 flex flex-col">
          <span className="text-xs font-semibold mb-1 text-gray-500">Name</span>
          <input
            type="text"
            placeholder="Punta del Este"
            className="mb-4 rounded-md py-1 px-2 border focus:outline-none capitalize"
            autoFocus
            value={name}
            onChange={handleName}
          />
          <span className="text-xs font-semibold mb-1 text-gray-500">
            Country
          </span>
          <input
            type="text"
            placeholder="Uruguay"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
            value={country}
            onChange={handleCountry}
          />
          <span className="text-xs font-semibold mb-1 text-gray-500">
            State
          </span>
          <input
            type="text"
            placeholder="Maldonado"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
            value={state}
            onChange={handleState}
          />
          <span className="text-xs font-semibold mb-1 text-gray-500">
            Description
          </span>
          <input
            type="text"
            placeholder="Description"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
            value={description}
            onChange={handleDescription}
          />
          <button
            className="bg-orange-600 text-sm font-semibold
                          text-white w-full py-2.5 rounded-md mt-3"
            onClick={save}
          >
            Submit
          </button>
        </div>
        <div className=" w-2/5 h-5/6 flex justify-center items-center rounded-xl">
          <Cards name={name} country={country} state={state} description={description}/>
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
