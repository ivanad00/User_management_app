import { FETCH_ALL, LOGIN } from "../constants/actionTypes";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
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
  return async (dispatch, getState) => {
    let data;
    try {
      const response = await fetch(`https://reqres.in/api/users?per_page=12`, {
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
