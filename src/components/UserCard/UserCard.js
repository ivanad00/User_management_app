import React from "react";
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

export default UserCard;
