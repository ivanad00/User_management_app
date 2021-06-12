import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllUsers } from "../../store/actions/actions";
import UserCard from "../../components/UserCard/UserCard";

import "./usersList.css";

const UsersList = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);

  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setError(null);

      await dispatch(fetchAllUsers());
    };
    getData();
  }, [dispatch]);

  return usersList.map((user) => {
    return (
      <div className="user">
        <UserCard
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          imgUrl={user.avatar}
        />
      </div>
    );
  });
};

export default UsersList;
