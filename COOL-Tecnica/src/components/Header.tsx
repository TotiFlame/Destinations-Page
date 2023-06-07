import { useState } from 'react';
import CreateForm from './CreateForm';

function Header() {
  const [openForm, setOpenForm] = useState(false);

  const handleForm = () => {
    setOpenForm(true);
  };

  const handleOnClose = () => {
    setOpenForm(false);
};

  return (
    <>
      <header className="bg-transparent z-10 absolute top-0 w-full h-12 flex items-center justify-between">
        <span className="text-slate-300 font-extrabold pl-4">
          DestinyFinder
        </span>
        <button
          className="bg-slate-800 bg-opacity-20 backdrop-filter backdrop-blur-lg mr-4
          py-1.5 px-10 text-sm font-semibold text-gray-400 rounded-3xl transition hover:bg-slate-800 hover:text-gray-200"
          onClick={handleForm}
        >
          Create
        </button>
      </header>
      <CreateForm onClose={handleOnClose} visible={openForm} />
    </>
  );
}

export default Header;
