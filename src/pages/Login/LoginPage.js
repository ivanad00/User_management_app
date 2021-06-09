import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

import { useDispatch } from "react-redux";
import { login } from "../../store/actions/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

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
        <Form className="form">
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="inputField">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
