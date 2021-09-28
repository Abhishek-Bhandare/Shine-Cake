import React from "react";
import { toast } from "react-toastify";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      pincode: "",
      cakename: "",
      date:""
    };
  }
  handleSuccess = () => {
    toast("Ordered Placed successfully");
  };

  handleFailure = () => {
    toast("Failed");
  };

  handlePayment = (e) => {
    e.preventDefault();
    const cake = this.props.location.state.cake;
    let address = this.refs.address.value;
    let pincode = this.refs.pincode.value;
    let cakename = this.refs.cakename.value;
    let date = this.refs.date.value;
    let data= {address,pincode,cakename,date}
    // let password = this.refs.password.value;

console.log(address);
    const id = localStorage.getItem("id");
    this.props.history.push({
      pathname: `/confirmation`,
      state: { data: data },
    });

    // fetch(`http://localhost:8087/placeorders/${id}/${cake.cakeId}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
        
    //     this.handleSuccess();
    //   })
    //   .catch((error) => {
    //     this.handleFailure();
    //   });

    
  };

  render() {
    console.log(this.props.location.state.cake);
    return (
      <div
        className="container"
        class="p-3 mb-2 mr-5 ml-5 bg-secondary text-white"
      >
        <form onSubmit={this.handlePayment}>
          <h1 style={{ textAlign: "center" }}>Enter your details</h1>
          <div className="mb-3 mr-5 ml-5">
            <label for="exampleInputBankName" className="form-label">
              full address
            </label>
            <input
              type="text"
              className="form-control"
              ref="address"
              id="exampleInputBankName"
              required
            />
          </div>
          <div className="mb-3 mr-5 ml-5">
            <label for="exampleInputCvv" className="form-label">
              Pin Code
            </label>
            <input
              type="number"
              className="form-control"
              ref="pincode"
              id="exampleInputCvv"
              // min="6" max="6"
            />
          </div>
          <div className="mb-3 mr-5 ml-5">
            <label for="exampleInputCardNumber" className="form-label">
              want any name in cake
            </label>
            <input
              type="text"
              className="form-control"
              ref="cakename"
              id="exampleInputCardNumber"
            />
          </div>
          <div className="mb-3 mr-5 ml-5">
            <label for="exampleInputCvv" className="form-label">
              when you want
            </label>
            <input type="date" className="form-control" id="exampleInputCvv" ref="date"/>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              className="btn btn-success"
              style={{ width: "100px", marginLeft: "10px" }}
            >
              Pay in Shop
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              style={{ marginLeft: "10px", width: "100px" }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Payment;
