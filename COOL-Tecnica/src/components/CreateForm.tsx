import Cards from './Card';

type CreateFormProps = {
  visible?: boolean;
  onClose: () => void;
};

function CreateForm({ visible = false, onClose }: CreateFormProps) {
  const handleOnClose = (e: any) => {
    if (e.target.id === 'containerForm') onClose();
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
          />
          <span className="text-xs font-semibold mb-1 text-gray-500">
            Country
          </span>
          <input
            type="text"
            placeholder="Uruguay"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
          />
          <span className="text-xs font-semibold mb-1 text-gray-500">
            State
          </span>
          <input
            type="text"
            placeholder="Maldonado"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
          />
          <span className="text-xs font-semibold mb-1 text-gray-500">
            Description
          </span>
          <input
            type="text"
            placeholder="Description"
            className="mb-3 rounded-md py-1 px-2 border focus:outline-none capitalize"
          />
          <button
            className="bg-orange-600 text-sm font-semibold
                          text-white w-full py-2.5 rounded-md mt-3"
          >
            Submit
          </button>
        </div>
        <div className=" w-2/5 h-5/6 flex justify-center items-center rounded-xl">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default CreateForm;
