import { useState } from "react";
import Sidebar from "./Sidebar";
import AllPromotersMain from "./mains/allPromoters/AllPromotersMain";

function AdminAllPromoters() {
  const [hideOverflow, setHideOverflow] = useState(false);

  return (
    <div
      className={`container-fluid p-0 ${
        hideOverflow ? "bg-scroll" : "overflow-visible"
      }`}
    >
      <div className="row p-0 m-0">
        <Sidebar />
        <AllPromotersMain setHideOverflow={setHideOverflow} />
      </div>
    </div>
  );
}

export default AdminAllPromoters;
