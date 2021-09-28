import React from "react";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 class="p-3 mb-3 bg-info text-white" style={{ textAlign: "center" }}>
          Customisation Of Cakes
        </h1>
        <br />

        <div className="container">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <b>To Add new Cakes in the Menu</b>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    <a
                      href="/product"
                      style={{ color: "wheat", textDecoration: "none" }}
                    >
                      Add Cakes
                    </a>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <b>To View Orders</b>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    <a
                      href="/ordertable"
                      style={{ color: "wheat", textDecoration: "none" }}
                    >
                      View Orders
                    </a>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">3</th>
                <td>
                  <b>View Cakes</b>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    <a
                      href="/ViewCakesTable2"
                      style={{ color: "wheat", textDecoration: "none" }}
                    >
                      View Cakes
                    </a>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">4</th>
                <td>
                  <b>Customer Complaints</b>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    <a
                      href="/complaint"
                      style={{ color: "wheat", textDecoration: "none" }}
                    >
                      Complaints
                    </a>
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">5</th>
                <td>
                  <b>Customer Data</b>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    <a
                      href="/customerdata"
                      style={{ color: "wheat", textDecoration: "none" }}
                    >
                      Cuntomer Data
                    </a>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AdminHome;
