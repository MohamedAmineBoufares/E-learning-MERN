import { GET_USER_COURSES } from "../constants/userConstants";

const INITIAL_STATE = {
  courses: [],
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_COURSES:
      return {
        ...state,
        courses: [...action.payload],
      };
    default:
      return state;
  }
};

export default userReducers;
