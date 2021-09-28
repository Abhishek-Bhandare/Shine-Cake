import React from "react";
// import ViewCakesTable from "./ViewCakesTable";
import { toast } from "react-toastify";
import "../cascading/formstyle.css";


class Product extends React.Component {
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
    this.submitInfo = this.submitInfo.bind(this);
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

  handleFailure = () => {
    toast("Failed");
  };

  submitInfo = (e) => {
    // e.preventDefault();
    const x = {
      // cakeId: e.target[0].value,
      name: e.target[0].value,
      category: e.target[1].value,
      weight: e.target[2].value,
      price: e.target[3].value,
    };

    fetch("http://localhost:8087/addcakes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        category: e.target[1].value,
        weight: e.target[2].value,
        price: e.target[3].value,
      }),
    })
      .then0((response) => response.json())

      .then((data) => {
        console.log("Success:", data);
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
        <div class="p-3 mb-2 bg-primary text-white">
          <h1 style={{ textAlign: "center" }}>Products</h1>
        </div>

        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <div className="col-sm-12 col-lg-8"> */}
            <form className="product" onSubmit={this.submitInfo}>
              <table style={{ marginTop: "20px",height:"350px" }}>
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
                      style={{ width: "300px", marginLeft: "25px",height:"35px" }}
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
                      style={{ width: "300px", marginLeft: "25px",height:"35px" }}
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
                      style={{ width: "300px", marginLeft: "25px",height:"35px" }}
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
                      required
                      style={{ width: "300px", marginLeft: "25px",height:"35px" }}
                    />{" "}
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={this.handleSuccess}
                      style={{ marginLeft: "25px" }}
                    >
                      Add Cake To Available
                    </button>
                  {/* </td> */}
                  {/* <td> */}
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
                    <button className="btn btn-danger" style={{ marginLeft: "25px" }}s>
                      <a
                        href="/Login"
                        style={{ textDecoration: "none", color: "whitesmoke" }}
                      >
                        LogOut
                      </a>
                    </button>
                  </td>
                   </tr>
                
              </table>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
