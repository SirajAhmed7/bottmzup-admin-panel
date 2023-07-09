import { useState } from "react";
import AllEventsMain from "./mains/allEvents/AllEventsMain";
import Sidebar from "./Sidebar";

function AdminAllEvents() {
  const [hideOverflow, setHideOverflow] = useState(false);

  return (
    <div
      className={`container-fluid p-0 ${
        hideOverflow ? "bg-scroll" : "overflow-visible"
      }`}
    >
      <div className="row p-0 m-0 relative">
        <Sidebar />
        <AllEventsMain setHideOverflow={setHideOverflow} />
      </div>
    </div>
  );
}

export default AdminAllEvents;
