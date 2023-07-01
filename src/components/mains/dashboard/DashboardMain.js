import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import DashboardStats from "./DashboardStats";

function DashboardMain() {
  return (
    <main className="col-md-10 p-0 max-vh-100 overflow-auto">
      <Header heading={"Dashboard"} />
      <MainContainer>
        <DashboardStats />
      </MainContainer>
    </main>
  );
}

export default DashboardMain;
