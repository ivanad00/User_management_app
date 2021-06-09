import { LOGIN } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
