import { FETCH_ALL, LOGIN } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  usersList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case FETCH_ALL:
      return {
        ...state,
        usersList: action.data,
      };
    default:
      return state;
  }
};
