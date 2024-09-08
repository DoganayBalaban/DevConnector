import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/auth";

const Navbar = () => {
  const { isAuthenticated, loading, logout } = useAuthStore();
  const authLinks = (
    <ul>
      <li>
        <a href="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && <>{isAuthenticated() ? authLinks : guestLinks}</>}
    </nav>
  );
};

export default Navbar;
