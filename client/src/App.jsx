import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
import { useEffect } from "react";
import useAuthStore from "./store/auth";
import Error from "./components/layout/Error";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  const { loadToken } = useAuthStore();
  useEffect(() => {
    loadToken();
  }, [loadToken]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Error />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </section>
      </Router>
    </>
  );
};

export default App;
