import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/actions";
import PropTypes from "prop-types";
import "./loginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <>
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
              console.log(err.message, "login");
            }
          }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Email not valid";
            }

            if (!values.password) {
              errors.password = "Password required";
            } else if (values.password.length < 6) {
              errors.password = "Password too short!";
            }
            return errors;
          }}
        >
          {({ isSubmitting }) => (
            <Form className="formLogin">
              <div className="inputField">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <div className="error">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className="inputField">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
                <div className="error">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <button className="btn" type="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default LoginPage;
