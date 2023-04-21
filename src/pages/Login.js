import React from "react";
import CustomInput from "../components/common/CustomInput";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  let schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            name="email"
            type="text"
            label="Email Address"
            id="email"
            val={formik.values.email}
            onCH={formik.handleChange("email")}
            o_class="mb-1"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger error-validation-text">
              {formik.errors.email}
            </div>
          ) : null}
          <CustomInput
            name="password"
            type="password"
            label="password"
            id="pass"
            val={formik.values.password}
            onCH={formik.handleChange("password")}
            o_class="mb-1"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger error-validation-text">
              {formik.errors.password}
            </div>
          ) : null}
          <div className="text-end mb-3">
            <Link
              className="text-center text-decoration-none text-dark"
              to="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            style={{ background: "#ffd333" }}
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
