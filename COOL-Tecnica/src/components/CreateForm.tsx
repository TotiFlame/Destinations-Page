import Cards from './Card';
import Destination from '../models/Destination';
import { ChangeEvent, useState } from 'react';

type CreateFormProps = {
  visible?: boolean;
  onClose: () => void;
};

function CreateForm({ visible = false, onClose }: CreateFormProps) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [description, setDescription] = useState('');
  const [base64Image, setBase64Image] = useState<string>('');


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

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setBase64Image(base64);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <label className="text-xs font-semibold mb-1 text-gray-500">
            Name
          </label>
          <input
            type="text"
            placeholder="Punta del Este"
            className="mb-4 rounded-md py-1 px-2 border focus:outline-none capitalize"
            autoFocus
            value={name}
            onChange={handleName}
          />
          <label className="text-xs font-semibold mb-1 text-gray-500">
            Country
          </label>
          <input
            type="text"
            placeholder="Uruguay"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
            value={country}
            onChange={handleCountry}
          />
          <label className="text-xs font-semibold mb-1 text-gray-500">
            State
          </label>
          <input
            type="text"
            placeholder="Maldonado"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
            value={state}
            onChange={handleState}
          />
          <label className="text-xs font-semibold mb-1 text-gray-500">
            Description
          </label>
          <input
            type="text"
            placeholder="Description"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
            value={description}
            onChange={handleDescription}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <button
            className="bg-orange-600 text-sm font-semibold
                          text-white w-full py-2.5 rounded-md mt-3"
            onClick={() => {
              const destinations = new Destination(
              undefined,
              {name}.name,
              {country}.country,
              {state}.state,
              {description}.description,
              {base64Image}.base64Image
            );
              destinations.storeData();
            }}
          >
            Submit
          </button>
        </div>
        <div className=" w-2/5 h-5/6 flex justify-center items-center rounded-xl">
          <Cards
            name={name}
            country={country}
            state={state}
            description={description}
            image={base64Image}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
