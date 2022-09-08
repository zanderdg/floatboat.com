import { combineReducers } from "redux";

import employees from "./reducers/employees";

const rootReducer = combineReducers({
  employees,
});

export default rootReducer;
