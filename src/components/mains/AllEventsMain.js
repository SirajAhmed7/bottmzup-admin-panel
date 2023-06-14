import Header from "../../common/Header";
import EventsTable from "./EventsTable";

function AllEventsMain() {
  return (
    <main className="col-md-9 p-0">
      <Header heading={"All Events"} />
      <EventsTable />
    </main>
  );
}

export default AllEventsMain;
