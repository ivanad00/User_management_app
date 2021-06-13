import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { search } from "../../store/actions/actions";
import "../Search/search.css";

const Search = (props) => {
  return (
    <section className="containerSearch">
      <Formik className="center">
        <Field
          name="search"
          className="input"
          type="text"
          placeholder="Start your search"
          onChange={(e) => props.search(e.target.value)}
        />
      </Formik>
    </section>
  );
};

const mapStateToProps = (state) => console.log(state.search);

//const mapDispatchToProps = {};

export default connect(mapStateToProps, { search })(Search);
