import Header from "../../../common/Header";
import MainContainer from "../../../common/MainContainer";
import EmailContainer from "./EmailContainer";
import MailInput from "./MailInput";

function EmailMain() {
  return (
    <main className="col-md-10 p-0 max-vh-100 overflow-auto">
      <Header heading={"Email"} />
      <MainContainer>
        <EmailContainer />
      </MainContainer>
    </main>
  );
}

export default EmailMain;
