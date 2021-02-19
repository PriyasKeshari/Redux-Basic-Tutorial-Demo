import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Constants from "../../constant/constant"
import API from "../../api/api"
import Types from "../../redux/action/types"
import { setSignUpData } from "../../redux/action/types";
import { connect } from "react-redux";
import "./SignUp.css"


const signApi = new API({ url: Constants.CONFIG.BASE_URL });
signApi.createEntity({ name: Constants.ENTITIES.SignUp, uri: "donors/" });

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isFirstNameValid: true,
      isLastNameValid: true,
      isEmailValid: true,
      isPasswordValid: true,
      redirectToLogin: false,
    };
  }
  componentWillMount = () => {
    this.NetworkCallForSignUp();
  };
  firstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
      isFirstNameValid: true,
    });
  };
  lastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
      isLastNameValid: true,
    });
  };
  emailChange = (event) => {
    this.setState({
      email: event.target.value,
      isEmailValid: true,
    });
  };
  passwordChange = (event) => {
    this.setState({
      password: event.target.value,
      isPasswordValid: true,
    });
  };

  NetworkCallForSignUp = () => {
    let body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    signApi.endpoints.donors
      .create(body, {
        config: {
          headers: {
            Authorization: "bearer " + localStorage.getItem("token"),
          },
        },
      })
      .then((data) => {
        if (data.data.status === "success") {
          this.props.dispatch(
            setSignUpData({
              type: Types.Types.REGISTER_SUCCESS,
              payload: data.data.data,
            })
          );
          this.setState({ redirectToLogin: true });
        } else if (data.data.status === "fail") {
          if (data.data.message === "Validation error") {
          }
        } else {
        }
      });
  };
  setToken = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("firstname", data.firstName);
    localStorage.setItem("lastname", data.lastName);
    localStorage.setItem("_donor", data.id);
  };

  SignUp = (e) => {
    e.preventDefault();
    let isEverythingvalidated = true;
    if (this.state.firstName === "") {
      isEverythingvalidated = false;
      this.setState({
        isFirstNameValid: false,
      });
    }
    if (this.state.lastName === "") {
      isEverythingvalidated = false;
      this.setState({
        isLastNameValid: false,
      });
    }
    if (this.state.email === "") {
      isEverythingvalidated = false;
      this.setState({
        isEmailValid: false,
      });
    }
    if (this.state.password === "") {
      isEverythingvalidated = false;
      this.setState({
        isPasswordValid: false,
      });
    }
    if (
      isEverythingvalidated &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password
    ) {
      this.NetworkCallForSignUp();
    }
  };
  backToLogin = () => {
    this.setState({ redirectToLogin: true });
  };


  render() {
    if (this.state.redirectToLogin) {
      return (
        <Redirect
          push
          to={{
            pathname: "/SignUp",
          }}
        />
      );
    }
    return (
      <>
        <h1>Here {this.props.firstName}</h1>

        <form>
          <div class="main">

            <label>Name:</label>
            <input type="text" name="name" placeholder="Enter the name" />
            <label>lastName:</label>
            <input type="text" name="lastname" placeholder="Enter the lastname" />
            <label>Email:</label>
            <input type="text" name="name" placeholder="Enter the emailid" />
            <label>Password:</label>
            <input type="Password" name="Password" placeholder="Enter the Password" />

            <button type="submit">SignUp</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button><a onClick={this.backToLogin}>backToLogin</a></button>
          </div>
        </form>

        {/* <form
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <label>
            FirstName:
            <input type="text" name="name" onChange={this.firstNameChange} />
          </label>
          <label>
            LastName:
            <input type="text" name="name" onChange={this.lastNameChange} />
          </label>
          <label>
            Email:
            <input type="text" name="name" onChange={this.emailChange} />
          </label>
          <label>
            Password:
            <input type="text" name="name" onChange={this.passwordChange} />
          </label>
        </form>
        <button
          style={{
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={this.SignUp}
        >
          SignUp
        </button> */}
        {/* <button
          style={{
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={this.backToLogin}
        >
          Back
        </button> */}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state, "state---");
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch, "dispatch---");
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
