import { connect } from "formik";
import {
  FETCH_ALL,
  LOGIN,
  SEARCH,
  BUTTON_CLICKED,
  ADD_USER,
} from "../constants/actionTypes";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const resData = await res.json();
      console.log(resData);
      if (!res.ok) {
        throw new Error(resData.error);
      }

      dispatch({ type: LOGIN });
    } catch (err) {
      throw err;
    }
  };
};

export const fetchAllUsers = (page) => {
  return async (dispatch) => {
    let data;
    try {
      const response = await fetch(`https://reqres.in/api/users?per_page=20`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error);
      }
      data = [...resData.data];
      dispatch({ type: FETCH_ALL, data });
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
};

export const search = (search) => {
  return async (dispatch) => {
    dispatch({
      type: SEARCH,
      payload: search,
    });
  };
};

export const buttonClicked = () => {
  return { type: BUTTON_CLICKED };
};

export const addUser = (firstName, lastName, email, file, avatar) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          avatar:
            avatar ||
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d60?s=400&d=robohash&r=x",
          file,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error);
      }

      dispatch({
        type: ADD_USER,
        user: {
          first_name: resData.firstName,
          last_name: resData.lastName,
          avatar: resData.avatar,
          id: resData.id,
          email: resData.email,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};

export const imagePath = connect(function (state) {
  return {
    imagePath: state.imagePath,
  };
})();
