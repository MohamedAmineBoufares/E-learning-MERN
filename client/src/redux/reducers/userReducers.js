import {
  AUTHORISED,
  GET_COURSE,
  GET_USER_COURSES,
} from "../constants/userConstants";

const INITIAL_STATE = {
  courses: [],
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_COURSES:
      return {
        courses: [...action.payload],
      };

    case GET_COURSE:
      return {
        course: [action.payload],
      };
    case AUTHORISED:
      return {
        authorised: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
