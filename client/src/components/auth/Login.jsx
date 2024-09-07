import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useAuthStore from "../../store/auth";

const Login = () => {
  const { login, error, isAuthenticated } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={onChange}
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            name="password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      {error && <p>{error}</p>}
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
