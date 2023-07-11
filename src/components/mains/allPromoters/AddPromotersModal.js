import Input from "../../../common/Input";
import Modal from "../../../common/Modal";

function AddPromotersModal({ modalOpen, handleCloseModal }) {
  return (
    <Modal
      title={"Add Promoter"}
      handleCloseModal={handleCloseModal}
      modalOpen={modalOpen}
    >
      <form className="grid max-w-screen-md mx-auto grid-cols-1 md:grid-cols-2 gap-3">
        <Input
          label={"Promoter name"}
          name="PromoterName"
          placeholder="Enter promoter name"
        />
        <Input
          label={"Email"}
          name="email"
          type="email"
          placeholder="Enter email"
        />

        <Input
          label={"Num event"}
          name="numEvent"
          placeholder="Enter num event"
        />

        <button className="px-4 !py-3 bg-gray-700 hover:bg-gray-800 text-gray-200 text-base font-semibold col-span-1 md:col-span-2 rounded-lg transition-colors">
          Submit
        </button>
      </form>
    </Modal>
  );
}

export default AddPromotersModal;
