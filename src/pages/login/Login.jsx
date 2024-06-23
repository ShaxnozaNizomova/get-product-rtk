import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useLoginMutation } from "../../context/api/userApi";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const initialState = {
  UserName: "john32",
  password: "12345678",
};

const Login = () => {
  let navigate = useNavigate();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [loginMutation, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginMutation(formData).unwrap();
      localStorage.setItem("x-auth-token", data.token);
      alert("Login Successful");
      setFormData(initialState);
      navigate("/home");
    } catch (error) {
      alert("Wrong Password or Username");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          value={formData.UserName}
          onChange={handleChange}
          type="text"
          name="UserName"
          placeholder="Username"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
        />
        {error && (
          <div className="error-message">Wrong Password or Username</div>
        )}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
