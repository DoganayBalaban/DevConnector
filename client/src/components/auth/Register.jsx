import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useAuthStore from "../../store/auth";
const Register = () => {
  const { register, error, isAuthenticated } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, password);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => onChange(e)}
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => onChange(e)}
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => onChange(e)}
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
};

export default Register;
