function CreateForm ({ visible = false, onClose }) {
    const handleOnClose = (e) => {
      if (e.target.id === 'containerForm') onClose();
    };

    if (!visible) return null;

    return (
      <div
      id="containerForm"
      className="absolute z-20 h-full w-full bg-black bg-opacity-60
      backdrop-blur-sm top-0 flex flex-col justify-center items-center"
      onClick={handleOnClose}
      >
        <div className="bg-white rounded p-2 w-3/5 h-3/4">
          <span>New Destination</span>
        </div>
      </div>
    );
}

export default CreateForm