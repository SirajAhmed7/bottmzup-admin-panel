import { useState } from "react";
import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import Modal from "../../../common/Modal";
import EventsTableContainer from "./EventsTableContainer";
import AddEventsModal from "./AddEventsModal";

function AllEventsMain({ setHideOverflow }) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpenModal() {
    setModalOpen(true);
    setHideOverflow(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseModal() {
    setModalOpen(false);
    setHideOverflow(false);
  }

  return (
    <main className="col-md-10 p-0 max-vh-100 overflow-auto">
      <Header heading={"All Events"} />
      <MainContainer>
        <EventsTableContainer handleOpenModal={handleOpenModal} />
      </MainContainer>
      <AddEventsModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      />
    </main>
  );
}

export default AllEventsMain;
