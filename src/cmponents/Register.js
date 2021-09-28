import React, { Component } from "react";
import "../cascading/formstyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regid: "",
      name: "",
      email: "",
      password: "",
      contact: "",
      usertype: "customer",
    };
    this.regid = this.regid.bind(this);
    this.name = this.name.bind(this);
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.contact = this.contact.bind(this);
    this.usertype = this.usertype.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }
  regid = (event) => {
    this.setState({
      regid: event.target.value,
    });
  };

  name = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  email = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  password = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  contact = (event) => {
    this.setState({
      contact: event.target.value,
    });
  };
  usertype = (event) => {
    this.setState({
      usertype: event.target.value,
    });
  };

  handleSuccess = () => {
    toast("successfully Registered");
  };

  handleFailure = () => {
    toast("Registration Failed");
  };

  submitInfo = (e) => {
    // REGEX start
    e.preventDefault();
    let password = this.state.password;
    let contact = this.state.contact
    if (
      // one capital,one digit,one special character,one small,min 8 and max 10
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/.test(
        password
      )
    ) {
      return toast.error("Invalid Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (
      // one capital,one digit,one special character,one small,min 8 and max 10
      !/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(
        contact
      )
    ) {
      return toast.error("Invalid Contact No", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    //REGEX End
    console.log(this.state.name);
    fetch("http://localhost:8087/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        regid: this.state.regid,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        contact: this.state.contact,
        usertype: this.state.usertype,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.props.history.push("/login");
        this.handleSuccess();
      })
      .catch((error) => {
        console.error("Error:", error);
        this.handleFailure();
      });

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div class="p-3 mb-2 bg-danger text-white">
          <h1
            style={{
              textAlign: "center",
            }}
          >
            {" "}
            Registration Page{" "}
          </h1>{" "}
        </div>
        <div
          className="container"
          style={{
            width: 500,
          }}
        >
          <form onSubmit={this.submitInfo} className="regis">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Enter name:
              </label>{" "}
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
                required
                onChange={(event) => {
                  this.name(event);
                }}
              />{" "}
            </div>{" "}
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Enter email:
              </label>{" "}
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
                required
                onChange={(event) => {
                  this.email(event);
                }}
              />{" "}
            </div>{" "}
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Create password:
              </label>{" "}
              <input
                type="password"
                class="form-control"
                placeholder="Create password"
                required
                onChange={(event) => {
                  this.password(event);
                }}
              />{" "}
            </div>{" "}
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Enter contact:
              </label>{" "}
              <input
                type="number"
                class="form-control"
                placeholder="Enter contact"
                required
                onChange={(event) => {
                  this.contact(event);
                }}
              />{" "}
            </div>
            <button className="btn btn-primary w-100"> Register </button>{" "}
          </form>{" "}
        </div>{" "}
        <ToastContainer />
      </div>
    );
  }
}
export default Register;
