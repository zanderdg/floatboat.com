import * as types from "../generalTypes";

const initialState = {
  employees: null,
};

const cpuReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_ALL_EMPLOYEES:
      return {
        ...state,
        employees: payload,
      };

    default:
      return state;
  }
};

export default cpuReducer;
