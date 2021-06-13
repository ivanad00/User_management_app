import { FETCH_ALL, LOGIN, SEARCH } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  usersList: [],
  search: "",
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
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
