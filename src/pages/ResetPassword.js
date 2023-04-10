import React from "react";
import CustomInput from "../components/common/CustomInput";

const ResetPassword = () => {
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center">Reset-Password</h3>
        <p className="text-center">Please enter your new Password.</p>
        <form action="">
          <CustomInput type="text" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />
          <CustomInput type="password" label="Confirm Password" id="comppass" />
          <button
            style={{ background: "#ffd333" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
