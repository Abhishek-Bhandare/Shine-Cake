import React, { Component } from "react";
import "../cascading/Login.css";
import "../cascading/formstyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      email: "",
      password: "",
    };
  }
  checkLogin = (event) => {
    event.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return toast.error("Invalid EmailId", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // if (
    //   // one capital,one digit,one special character,one small,min 8 and max 10 
    //   !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/.test(
    //     password
    //   )
    // ) {
    //   return toast.error("Invalid Password", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }

    const logdata = { uid: email, pwd: password };
    const url = `http://localhost:8087/userLogin`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(logdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status === "SUCCESS") {
          if (data?.username === "customer") {
            return this.props.history.push(`/viewcakestableUser/${email}`);
          }
          if (data?.username === "admin") {
            return this.props.history.push(`/adminhome/${email}`);
          }
        } else {
          alert("Invalid Username or Password");
        }
      })
      .catch((err) => console.log("err"));
  };
  render() {
    return (
      <div>
        <div class="p-2 mb-2 bg-danger text-white">
          <h1 style={{ textAlign: "center" }}>Please Login </h1>
        </div>
        <div className="container">
          <body className="text-center fullpage">
            <main className="form-signin">
              <form onSubmit={this.checkLogin} className="loginstyle">
                <img
                  className="mb-4"
                  src="./image/logo.png"
                  alt="logo"
                  width="150px"
                  height="150px"
                  style={{ borderRadius: "50%" }}
                />

                <div className="form-floating">
                  <label for="floatingInput">Email address</label>
                  <input
                    type="text"
                    class="form-control"
                    ref="email"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="form-floating">
                  <label for="floatingPassword">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    ref="password"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  className="w-100 btn btn-lg btn-primary login"
                  type="submit"
                >
                  Login
                </button>

                <form action="/register">
                  <button
                    className="w-100 btn btn-lg btn-primary register"
                    type="submit"
                  >
                    Register
                  </button>
                </form>
              </form>
            </main>
          </body>
          <br />
          <p>{this.state.msg}</p>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default Login;
