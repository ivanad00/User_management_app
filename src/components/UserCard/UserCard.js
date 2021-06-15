import React from "react";
import PropTypes from "prop-types";
import "./userCard.css";

const UserCard = (props) => {
  return (
    <div className="userCard">
      <img src={props.imgUrl} alt="User" className="userImg" />
      <p className="firstName">{props.first_name}</p>
      <p className="lastName">{props.last_name}</p>
    </div>
  );
};

UserCard.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserCard;
