import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import PromotersTableContainer from "./PromotersTableContainer";

function AllPromotersMain() {
  return (
    <main className="col-md-10 p-0 max-vh-100 overflow-auto">
      <Header heading={"All Promoters"} />
      <MainContainer>
        <PromotersTableContainer />
      </MainContainer>
    </main>
  );
}

export default AllPromotersMain;
