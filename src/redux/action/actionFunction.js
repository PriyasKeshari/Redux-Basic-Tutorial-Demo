import Types from "./types";

export const setLoginData = (loginData) => {
  return {
    type: Types.Types.LOGIN_SUCCESS,
    payload: loginData,
  };
};
export const setSignUpData = (signUpData) => {
  return {
    type: Types.Types.REGISTER_SUCCESS,
    payload: signUpData,
  };
};
