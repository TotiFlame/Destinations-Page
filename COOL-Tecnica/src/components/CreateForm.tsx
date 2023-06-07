import Card from './Card';
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
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setBase64Image(base64);
      };
    }
  };

  return (
    <div
      id="containerForm"
      className="fixed inset-0 z-20 h-full w-full bg-black bg-opacity-60
      backdrop-blur-sm top-0 flex flex-col justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="relative bg-purple-50 rounded p-2 w-3/4 h-5/6 flex lg:flex-row items-center justify-around md:flex-col sm:flex-col">
        <h2 className="absolute font-semibold text-lg my-3 text-slate-700 lg:top-1 md:top-3 sm:top-0">
          New Destination
        </h2>
        <div className="w-72 h-80 flex flex-col md:mt-20 lg:mt-0 sm:w-64 sm:mt-12 sm:mb-8">
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
          <div className="relative bg-slate-200 w-full h-12 rounded py-2 flex justify-center items-center">
            <label className="text-xs font-semibold text-gray-500">
              Add Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute opacity-0 top-0 left-0 w-full"
            />
          </div>
          <button
            className="bg-orange-600 text-sm font-semibold
                          text-white w-full py-2.5 rounded-md mt-3"
            onClick={() => {
              const newDestination = new Destination(
                undefined,
                name,
                country,
                state,
                description,
                base64Image
              );
              newDestination.storeData();
            }}
          >
            Submit
          </button>
        </div>
        <div className=" w-2/5 h-5/6 flex justify-center items-center rounded-xl md:mt-16 lg:mt-0 ">
          <Card
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
