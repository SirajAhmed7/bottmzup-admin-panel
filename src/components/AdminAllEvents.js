import AllEventsMain from "./mains/allEvents/AllEventsMain";
import Sidebar from "./Sidebar";

function AdminAllEvents() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <Sidebar />
        <AllEventsMain />
      </div>
    </div>
  );
}

export default AdminAllEvents;
