function Modal({ title, modalOpen, handleCloseModal, children }) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-screen h-screen bg-gray-700 -z-10 bg-opacity-30 backdrop-blur-sm ${
          modalOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseModal}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 ${
          modalOpen
            ? "opacity-100 !scale-100 !z-50"
            : "opacity-0 pointer-events-none"
        } scale-0 rounded-lg transition-all`}
      >
        <h3 className="text-2xl font-black">{title}</h3>
        <button onClick={handleCloseModal}>
          <i class="fa-solid fa-xmark absolute top-4 right-4 text-2xl"></i>
        </button>
        {children}
      </div>
    </>
  );
}

export default Modal;
