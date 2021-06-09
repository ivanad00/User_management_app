import { LOGIN } from "../constants/actionTypes";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        headers: {
          //   Accept: "application/json",
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
