import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../store/actions/actions";
import UserCard from "../UserCard/UserCard";
import PropTypes from "prop-types";
import "./usersList.css";

const UsersList = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchAllUsers());
    };
    getData();
  }, [dispatch]);

  console.log(search);

  return (
    usersList
      // eslint-disable-next-line array-callback-return
      .filter((user) => {
        if (search.length < 2) {
          return user;
        } else if (
          `${user.first_name.toLowerCase()}
          ${user.last_name.toLowerCase()}`.includes(search.toLowerCase())
        )
          return user;
      })
      .map((user) => {
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
      })
  );
};

UsersList.propTypes = {
  search: PropTypes.string,
  usersList: PropTypes.array,
};

export default UsersList;
