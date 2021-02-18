import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Constants from "../constant/constant";
import API from "../api/api";
import { connect } from "react-redux";
import Types from "../redux/action/types";
import { setLoginData } from "../redux/action/actionFunction";

const authAPI = new API({ url: Constants.CONFIG.BASE_URL });
authAPI.createEntity({ name: Constants.ENTITIES.Login, uri: "auth/donor" });

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToSignUp: false,
      email: "",
      password: "",
      isEmailValid: true,
      isPasswordValid: true,
    };
  }
  componentWillMount = () => {
    this.networkCallForLogin();
  };
  Login = (e, user) => {
    e.preventDefault();
    let validity = true;
    if (this.state.email === "") {
      validity = false;
    }
    if (this.state.password === "") {
      validity = false;
    }
    if (validity && this.state.email && this.state.password) {
      this.networkCallForLogin();
    }
  };
  emailChange = (e) => {
    this.setState({
      isEmailValid: true,
      email: e.target.value,
    });
  };
  passwordChange = (e) => {
    this.setState({
      isPasswordValid: true,
      password: e.target.value,
    });
  };
  networkCallForLogin = (dispatch) => {
    var body = {
      email: this.state.email,
      password: this.state.password,
    };
    authAPI.endpoints.auth
      .create(body, {
        config: {
          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        },
      })
      .then((data) => {
        if (data.data.data.token) {
          localStorage.setItem("token", data.data.data.token);
          localStorage.setItem("firstname", data.data.data.firstName);
          localStorage.setItem("lastname", data.data.data.lastName);
          localStorage.setItem("_donor", data.data.data.donorId);
          this.props.dispatch(
            setLoginData({
              type: Types.Types.LOGIN_SUCCESS,
              payload: data.data.data,
            })
          );
          this.setState({ redirectToSignUp: true });
        }
        if (data.data.status === "fail") {
          this.setState({ disableButton: false });
          //  dispatch(setLoginData(Types.Types.LOGIN_FAILURE));
        }
      });
  };
  alredyHaveAccount = () => {
    this.setState({ redirectToSignUp: true });
  };

  render() {
    //   const { dispatch } = this.props;
    if (this.state.redirectToSignUp) {
      return (
        <Redirect
          push
          to={{
            pathname: "/signup",
          }}
        />
      );
    }
    return (
      <>
        {/* <style></style>
        <div>
          <form>
            <label for="email">EMAIL</label>
            <br></br>
            <input type="text" name="email" placeholder="Enter your fullname" />
            <br></br>
            <label for="password">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <br></br>
            <button type="button" value="btn">
              <br></br> Login
            </button>
            <button type="button" value="btn">
              New User
            </button>
          </form>
        </div>
        <style></style> */}
        <form
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <label>
            Email:
            <input
              type="text"
              name="name"
              onChange={this.emailChange}
              value={this.state.email}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="name"
              onChange={this.passwordChange}
              value={this.state.password}
            />
          </label>
        </form>
        <button
          style={{
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={this.Login}
        >
          Login
        </button>
        <button
          style={{
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={this.alredyHaveAccount}
        >
          Already Have Account
        </button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
