import React from "react";
import complaintservice from "../service/complaintservice";

class Complaints extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complaints: [] };
    fetch("http://localhost:8087/complaints")
      .then((response) => response.json())
      .then(
        (complaints) => (console.log(complaints), this.setState({ complaints }))
      );
  }

  deleteComplaint(id) {
    complaintservice.deleteComplaint(id).then((res) => {
      this.setState({
        complaints: this.state.complaints.filter(
          (complaint) => complaint.id !== id
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
              <th className="text-center">ordid</th>
              <th className="text-center">name</th>
              <th className="text-center">emailid</th>
              <th className="text-center">mobileno</th>
              <th className="text-center">msg</th>
              <th className="text-center">action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.complaints.map((complaints) => (
              <tr key={complaints.id}>
                <td className="text-danger text-center">{complaints.ordid}</td>
                <td className="text-danger text-center">{complaints.name}</td>
                <td className="text-danger text-center">
                  {complaints.emailid}
                </td>
                <td className="text-danger text-center">
                  {complaints.mobileno}
                </td>
                <td className="text-danger text-center">{complaints.msg}</td>

                <td>
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => this.deleteComplaint(complaints.id)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                </td>
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

export default Complaints;
