import React from "react";
import customerservice from "../service/customerservice";

class customerdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
    fetch("http://localhost:8087/GetData")
      .then((response) => response.json())
      .then(
        (customers) => (console.log(customers), this.setState({ customers }))
      );
  }

  deleteCustomerData(regid) {
    customerservice.deleteCustomerData(regid).then((res) => {
      this.setState({
        customers: this.state.customers.filter(
          (customers) => customers.regid !== regid
        ),
      });
    });
  }

  render() {
    return (
      <div>
        <br />
        <h1 className="text-secondary text-lg-center"> Order Bookings </h1>
        <br />
        <br />
        <br />
        <table className="table table-striped table text-danger border">
          <thead>
            <tr>
              <th className="text-center">regid</th>
              <th className="text-center">name</th>
              <th className="text-center">email</th>
              <th className="text-center">contact</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customers) => (
              <tr key={customers.regid}>
                <td className="text-danger text-center">{customers.regid}</td>
                <td className="text-danger text-center">{customers.name}</td>
                <td className="text-danger text-center">
                  {customers.email}
                </td>
                <td className="text-danger text-center">
                  {customers.contact}
                </td>
               

                {/* <td>
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => this.deleteCustomerData(customers.regid)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-warning">
            <a
              href="/AdminHome"
              style={{ textDecoration: "none", color: "black" }}
            >
              Back To Home
            </a>
          </button>
        </div>
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    );
  }
}

export default customerdata;
