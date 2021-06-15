import {
  FETCH_ALL,
  LOGIN,
  SEARCH,
  BUTTON_CLICKED,
  ADD_USER,
  UPLOAD_IMAGE,
} from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  usersList: [],
  search: "",
  isButtonClicked: false,
  imagePath: "",
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

    case BUTTON_CLICKED:
      return {
        ...state,
        isButtonClicked: !state.isButtonClicked,
      };

    case ADD_USER:
      const newUsers = [...state.usersList];
      newUsers.unshift(action.user);
      return {
        ...state,
        usersList: newUsers,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        imagePath: action.payload,
      };
    default:
      return state;
  }
};
