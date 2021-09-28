import React from "react";
import cakeservice from "../service/cakeservice";
import "../cascading/formstyle.css";

class updatecakedetails2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      weight: "",
      price: "",
    };
    this.cakeId = this.cakeId.bind(this);
    this.name = this.name.bind(this);
    this.category = this.category.bind(this);
    this.weight = this.weight.bind(this);
    this.price = this.price.bind(this);
    // this.submitInfo = this.submitInfo.bind(this);
  }

  cakeId = (event) => {
    this.setState({ cakeId: event.target.value });
  };
  name = (event) => {
    this.setState({ name: event.target.value });
  };

  category = (event) => {
    this.setState({ category: event.target.value });
  };

  weight = (event) => {
    this.setState({ weight: event.target.value });
  };
  price = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSuccess = (e) => {
    alert("Cake Added Successfully");
  };

  // handleFailure = () => {
  //   toast("Failed");
  // };

  submitInfo = (e) => {
    try {
      // e.preventDefault();
      const cake = {
        cakeId: this.props.match.params.cakeId,
        name: e.target[0].value,
        category: e.target[1].value,
        weight: e.target[2].value,
        price: e.target[3].value,
      };

      cakeservice.updateCake(JSON.stringify(cake));
    } catch (err) {
      console.log("error", err);
    }
  };

  render() {
    return (
      <div>
        <div class="p-3 mb-2 bg-primary text-white">
          <h1 style={{ textAlign: "center" }}>Update Cake Details</h1>
        </div>
        {console.log(this.state.cakeId)}
        <form
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={this.submitInfo}
          className="updatecake
          "
        >
          <table style={{ marginTop: "20px" }}>
            <tr>
              <td>
                Enter Cake Name :<br />
                <br />
              </td>
              <td>
                <input
                  type="text"
                  ref=""
                  placeholder="name"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                />
                <br />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                Select Category :<br />
                <br />
              </td>
              <td>
                <select
                  class="Category"
                  aria-label="Default select example"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                >
                  <option selected>select menu</option>
                  <option value="Egg">Egg</option>
                  <option value="Eggless">Eggless</option>
                </select>
                <br />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                Select Weight of the Cake :<br />
                <br />
              </td>
              <td>
                <select
                  class="Weight"
                  aria-label="Default select example"
                  required
                  style={{ width: "300px", marginLeft: "25px" }}
                >
                  <option selected>select menu</option>
                  <option value="1Kg">1Kg</option>
                  <option value="2Kg">2Kg</option>
                </select>
                <br />
                <br />
              </td>
            </tr>

            <tr>
              <td>
                Enter Price : <br />
                <br />
              </td>
              <td>
                <input
                  type="number"
                  ref=""
                  placeholder="price"
                  // required
                  style={{ width: "300px", marginLeft: "25px" }}
                />{" "}
                <br />
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleSuccess}
                >
                  Update Cake
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  style={{ marginLeft: "25px" }}
                >
                  <a
                    href="/AdminHome"
                    style={{ textDecoration: "none", color: "whitesmoke" }}
                  >
                    Back To Home
                  </a>
                </button>
              </td>
            </tr>
            <tr></tr>
          </table>
        </form>
      </div>
    );
  }
}
export default updatecakedetails2;
