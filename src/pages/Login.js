import React from "react";
import CustomInput from "../components/common/CustomInput";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="">
          <CustomInput
            name="email"
            type="text"
            label="Email Address"
            id="email"
          />
          <CustomInput
            name="password"
            type="password"
            label="password"
            id="pass"
          />
          <div className="text-end mb-3">
            <Link
              className="text-center text-decoration-none text-dark"
              to="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Link
            to="/admin"
            style={{ background: "#ffd333" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none"
            type="submit"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
