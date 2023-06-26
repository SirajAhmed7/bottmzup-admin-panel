import Header from "../../../common/Header";
import EventsTableContainer from "./EventsTableContainer";

function AllEventsMain() {
  return (
    <main className="col-md-10 p-0 max-vh-100 overflow-auto">
      <Header heading={"All Events"} />
      <EventsTableContainer />
    </main>
  );
}

export default AllEventsMain;
