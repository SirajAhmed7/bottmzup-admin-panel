import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./components/AdminLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/admin-login" />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
