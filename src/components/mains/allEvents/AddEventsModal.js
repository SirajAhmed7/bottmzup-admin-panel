import Input from "../../../common/Input";
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
        <form className="grid max-w-screen-md mx-auto grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label={"Event name"}
            name="eventName"
            placeholder="Enter event name"
          />
          <Input
            label={"Date"}
            name="date"
            type="date"
            placeholder="DD-MM-YYYY"
          />

          <Input
            label={"Curated by"}
            name="curatedBy"
            placeholder="Enter curator"
          />
          <Input
            label={"Event venue"}
            name="eventVenue"
            placeholder="Enter event venue"
          />

          <Input label={"Timings"} name="timings" placeholder="00:00-00:00" />
          <Input
            label={"Price range"}
            name="priceRange"
            placeholder="Eg. 1000 - 3000"
          />
          <button className="px-4 !py-3 bg-gray-700 hover:bg-gray-800 text-gray-200 text-base font-semibold col-span-1 md:col-span-2 rounded-lg transition-colors">
            Submit
          </button>
        </form>
      </Modal>
      {/* )} */}
    </>
  );
}

export default AddEventsModal;
