import React from "react";
import { toast } from "react-toastify";
import "../cascading/formstyle.css";


class customercomplaint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: "",
      mobileno: "",
      name: "",
      ordid: "",
      msg: "",
    };
    this.id = this.id.bind(this);
    this.emailid = this.emailid.bind(this);
    this.mobileno = this.mobileno.bind(this);
    this.name = this.name.bind(this);
    this.ordid = this.ordid.bind(this);
    this.msg = this.msg.bind(this);
    this.submitcomplaint = this.submitcomplaint.bind(this);
  }

  id = (event) => {
    this.setState({ id: event.target.value });
  };

  emailid = (event) => {
    this.setState({ emailid: event.target.value });
  };

  mobileno = (event) => {
    this.setState({ mobileno: event.target.value });
  };
  name = (event) => {
    this.setState({ name: event.target.value });
  };

  ordid = (event) => {
    this.setState({ ordid: event.target.value });
  };

  msg = (event) => {
    this.setState({ msg: event.target.value });
  };
  // submitcomplaint = (event) => {
  //   this.setState({ submitcomplaint: event.target.value });
  // };

  handleSuccess = (e) => {
    toast("Cake Added Successfully");
  };

  handleFailure = () => {
    toast("Failed");
  };

  submitcomplaint = (e) => {
    const x = {
      // cakeId: e.target[0].value,

      emailid: e.target[0].value,
      mobileno: e.target[1].value,
      name: e.target[2].value,
      ordid: e.target[3].value,
      msg: e.target[4].value,
    };

    fetch("http://localhost:8087/addcomplaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailid: e.target[0].value,
        mobileno: e.target[1].value,
        name: e.target[2].value,
        ordid: e.target[3].value,
        msg: e.target[4].value,
      }),
    })
      .then((response) => response.json())

      .then((data) => {
        console.log("Success:", data);
        this.handleSuccess();
      })
      .catch((error) => {
        console.error("Error:", error);
        this.handleFailure();
      });
  };
  render() {
    return (
      <div>
        <div class="p-3 mb-2 bg-primary text-white">
          <h1 style={{ textAlign: "center" }}>Complaints</h1>
        </div>

        <form
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={this.submitcomplaint}
          className="customercomplaint"
        >
          <table style={{ marginTop: "20px"}} >
            <tr>
              <td>
                Enter email id :<br />
                <br />
              </td>
              <td>
                <input
                  type="email"
                  ref=""
                  placeholder="email"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                />
                <br />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                Enter mobile no :<br />
                <br />
              </td>
              <td>
                <input
                  type="text"
                  ref=""
                  placeholder="mobile No"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                />
                <br />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                Enter name :<br />
                <br />
              </td>
              <td>
                <input
                  type="text"
                  ref=""
                  placeholder="Name"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                />
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                Enter order id (if Available) :<br />
                <br />
              </td>
              <td>
                <input
                  type="number"
                  ref=""
                  placeholder="orderid"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                />
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                Enter Your suggestion or msg :<br />
                {/* <br /> */}
              </td>
              <td>
              {/* <input
                  type="text"
                  ref=""
                  placeholder="text"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                /> */}
                <textarea style={{ width: "300px", height:"80px", marginLeft: "25px"}} placeholder="Enter your suggestion"></textarea>
              </td>
              <td>
                <br />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                {/* <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleSuccess}
                  style={{ marginLeft: "10px" }}
                >
                  submit complaint
                </button> */}
              </td>
              <td colSpan="2">
              <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleSuccess}
                  style={{ marginLeft: "-90px",marginTop:"20px" }}
                >
                  submit complaint
                </button>
                <button
                  className="btn btn-warning"
                  style={{ marginLeft: "20px",marginTop:"20px"}}
                >
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "whitesmoke" }}
                  >
                    Back To Home
                  </a>
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
export default customercomplaint;
