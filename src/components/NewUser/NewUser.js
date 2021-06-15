import React from "react";
import { useDispatch } from "react-redux";
import { buttonClicked } from "../../store/actions/actions";
import PropTypes from "prop-types";
import "./newUser.css";

const NewUser = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("clicked");
    dispatch(buttonClicked());
  };

  return (
    <section className="newUser">
      <div>Add new user</div>
      <button className="newUserBtn" type="submit" onClick={handleClick}>
        +
      </button>
    </section>
  );
};

NewUser.propTypes = {
  handleClick: PropTypes.func,
};

export default NewUser;
