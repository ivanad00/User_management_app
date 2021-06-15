import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addUser, buttonClicked, imagePath } from "../../store/actions/actions";
import "./newUserForm.css";

const NewUserForm = () => {
  const dispatch = useDispatch();
  const isButtonClicked = useSelector((state) => state.isButtonClicked);

  if (isButtonClicked)
    return (
      <div className="newUserForm">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            avatar: "",
            file: null,
          }}
          onSubmit={async (values) => {
            try {
              await dispatch(
                addUser(
                  values.firstName,
                  values.lastName,
                  values.email,
                  values.avatar,
                  values.file
                )
              );
              dispatch(buttonClicked()).then(window.scrollTo(0, 0));
              console.log(isButtonClicked);
            } catch (err) {
              console.log(err.message);
            }
          }}
          validate={(values) => {
            const errors = {};

            if (!values.firstName) {
              errors.firstName = "First name is required";
            }

            if (!values.lastName) {
              errors.lastName = "Last name is required";
            }

            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Email not valid";
            }

            return errors;
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="form">
              <div className="title">Add new user</div>

              <div className="inputField">
                <label htmlFor="firstName" className="label">
                  First name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name here"
                />
                <div className="error">
                  <ErrorMessage name="firstName" />
                </div>
              </div>
              <div className="inputField">
                <label htmlFor="lastName" className="label">
                  Last name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name here"
                />
                <div className="error">
                  <ErrorMessage name="lastName" />
                </div>
              </div>
              <div className="inputField">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email here"
                />
                <div className="error">
                  <ErrorMessage className="error" name="email" />
                </div>
              </div>
              <div className="inputField">
                <label htmlFor="avatar" className="label">
                  Image URL
                </label>
                <Field
                  type="text"
                  name="avatar"
                  id="avatar"
                  placeholder="Enter your avatar URL here"
                />
              </div>
              <div className="inputField">
                <label htmlFor="file" className="label">
                  Upload your photo
                </label>
                <Field
                  type="file"
                  name="uploadPhoto"
                  id="uploadPhoto"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />
              </div>
              <button type="submit" className="submit">
                {isSubmitting ? "Submitted" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  else {
    return null;
  }
};

export default NewUserForm;
