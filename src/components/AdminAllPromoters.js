import Sidebar from "./Sidebar";
import AllPromotersMain from "./mains/allPromoters/AllPromotersMain";

function AdminAllPromoters() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <Sidebar />
        <AllPromotersMain />
      </div>
    </div>
  );
}

export default AdminAllPromoters;
