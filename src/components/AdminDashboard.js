import Sidebar from "./Sidebar";
import DashboardMain from "./mains/dashboard/DashboardMain";

function AdminDashboard() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <Sidebar />
        <DashboardMain />
      </div>
    </div>
  );
}

export default AdminDashboard;
