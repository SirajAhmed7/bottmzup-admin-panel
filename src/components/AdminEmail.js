import Sidebar from "./Sidebar";
import EmailMain from "./mains/email/EmailMain";

function AdminEmail() {
  return (
    <div className="container-fluid p-0">
      <div className="row p-0 m-0">
        <Sidebar />
        <EmailMain />
      </div>
    </div>
  );
}

export default AdminEmail;
