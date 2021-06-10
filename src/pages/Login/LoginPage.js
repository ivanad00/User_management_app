import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/actions";

// import validateLogin from "../../components/validateLogin/validateLogin.js";

const LoginPage = ({ errors }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length < 6) {
      error = "Too short!";
    }
    return error;
  }

  return (
    <div className="loginForm">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            await dispatch(login(values.email, values.password));
          } catch (err) {
            setError(err.message);
          }
        }}
      >
        {({ errors, touched, validateField, validateForm }) => (
          <Form className="form">
            <div className="inputField">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                validate={validateEmail}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div className="inputField">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                validate={validatePassword}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </div>

            <button
              className="btn"
              type="submit"
              onClick={() =>
                validateForm().then(() => console.log("Not valid"))
              }
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
