import React from "react";
import CustomInput from "../components/common/CustomInput";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">
          Please enter your register email to get reset password mail.
        </p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <button
            style={{ background: "#ffd333" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100 mb-3"
            type="submit"
          >
            Send Link
          </button>
          <div className="text-center">
            <Link to="/" className="text-center text-decoration-none text-dark">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
