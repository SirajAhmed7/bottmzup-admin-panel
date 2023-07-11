import { useState } from "react";
import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import PromotersTableContainer from "./PromotersTableContainer";
import AddPromotersModal from "./AddPromotersModal";

function AllPromotersMain({ setHideOverflow }) {
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
      <Header heading={"All Promoters"} />
      <MainContainer>
        <PromotersTableContainer handleOpenModal={handleOpenModal} />
      </MainContainer>
      <AddPromotersModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      />
    </main>
  );
}

export default AllPromotersMain;
