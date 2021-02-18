import Types from "../action/types";

const initialState = {
  firstName: "uu",
  lastName: "",
  email: "",
  password: "",
  loginEmail: "",
  loginPassword: "",
};

export const signUpReducer = (state = initialState, action) => {
  let actionPayloadData = action.payload;
  console.log(actionPayloadData, "action data");
  switch (action.type) {
    case Types.Types.REGISTER_SUCCESS:
      return {
        ...state,
        firstName: action.payload.payload.firstName,
        lastName: action.payload.payload.lastName,
        email: action.payload.payload.email,
        password: action.payload.payload.password,
      };
    default:
      return state;
  }
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.Types.LOGIN_SUCCESS:
      return {
        ...state,
        loginEmail: action.payload.payload.firstName,
        loginPassword: action.payload.payload.lastName,
      };
    default:
      return state;
  }
};
