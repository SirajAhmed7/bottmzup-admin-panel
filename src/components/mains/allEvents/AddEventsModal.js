import Modal from "../../../common/Modal";

function AddEventsModal({ modalOpen, handleCloseModal }) {
  return (
    <>
      {/* {modalOpen && ( */}
      <Modal
        title="Add event"
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      >
        <form>
          <input type="text" />
        </form>
      </Modal>
      {/* )} */}
    </>
  );
}

export default AddEventsModal;
