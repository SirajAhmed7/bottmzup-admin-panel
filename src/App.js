import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminAllEvents from "./components/AdminAllEvents";
import AdminAllPromoters from "./components/AdminAllPromoters";
import AdminPayments from "./components/AdminPayments";
import { useState } from "react";
import AdminEmail from "./components/AdminEmail";

function App() {
  const [access_token, setAccessToken] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/admin-login" />} />
          <Route
            exact
            path="/admin-login"
            element={<AdminLogin onLogin={setAccessToken} />}
          />
          <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          <Route
            exact
            path="/admin-all-events"
            element={<AdminAllEvents accessToken={access_token} />}
          />
          <Route
            exact
            path="/admin-all-promoters"
            element={<AdminAllPromoters />}
          />
          <Route exact path="/admin-payments" element={<AdminPayments />} />
          <Route exact path="/admin-email" element={<AdminEmail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
