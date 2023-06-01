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
        <span
          className="text-slate-300 font-medium cursor-pointer pr-4"
          onClick={handleForm}
        >
          Create destination
        </span>
      </header>
      <CreateForm onClose={handleOnClose} visible={openForm} />
    </>
  );
}

export default Header;
