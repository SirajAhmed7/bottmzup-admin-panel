import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import EventsTableContainer from "./EventsTableContainer";

function AllEventsMain() {
  return (
    <main className="col-md-10 p-0 max-vh-100 overflow-auto">
      <Header heading={"All Events"} />
      <MainContainer>
        <EventsTableContainer />
      </MainContainer>
    </main>
  );
}

export default AllEventsMain;