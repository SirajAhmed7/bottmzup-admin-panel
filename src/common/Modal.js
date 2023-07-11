function Modal({ title, modalOpen, handleCloseModal, children }) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-gray-900 bg-opacity-50 -z-10 ${
          modalOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseModal}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 ${
          modalOpen
            ? "opacity-100 !scale-100 !z-50"
            : "opacity-0 pointer-events-none"
        } scale-0 rounded-lg transition-all`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-black">{title}</h3>
          <button onClick={handleCloseModal}>
            <i class="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

export default Modal;
