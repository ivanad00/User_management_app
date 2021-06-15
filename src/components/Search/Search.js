import { Field, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { search } from "../../store/actions/actions";
import "../Search/search.css";
import PropTypes from "prop-types";

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

Search.propTypes = {
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, { search })(Search);
