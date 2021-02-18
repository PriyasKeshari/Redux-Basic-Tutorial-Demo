import { combineReducers } from "redux";
import { loginReducer, signUpReducer } from "./loginReducer";

// Root Reducers
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  signUpReducer: signUpReducer,
});
export default rootReducer;
