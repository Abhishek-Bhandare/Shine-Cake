import React from "react";
import { Link } from "react-router-dom";

class ViewCakesTableUser extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { cakesavailable: [] };
    fetch("http://localhost:8087/cakedata")
      .then((response) => response.json())
      .then(
        (cakesavailable) => (
          console.log(cakesavailable), this.setState({ cakesavailable })
        )
      );
  }

  handleOrderSelect = (available) => {
    console.log(available);

    this.props.history.push({
      pathname: `/payment`,
      state: { cake: available },
    });

    
  };

  render() {
    return (
      <div>
        <br />
        <h1 className="text-secondary text-lg-center"> Cakes Available </h1>
        <br />
        <br />
        <br />
        <table className="table table-striped table text-danger border">
          <thead>
            <tr>
              {/* <th className="text-center">CakeId</th> */}
              <th className="text-center">Cake Name</th>
              <th className="text-center">Cake Category</th>
              <th className="text-center">Cake Weight</th>
              <th className="text-center">Cake Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cakesavailable.map((available) => (
              <tr key={available.cakeId}>
                {/* <td className="text-primary text-center">{available.cakeid}</td> */}
                <td className="text-warning text-center">{available.name}</td>
                <td className="text-info text-center">{available.category}</td>
                <td className="text-danger text-center">{available.weight}</td>
                <td className="text-info text-center">{available.price}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.handleOrderSelect(available)}
                  >
                    PlaceOrder
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    );
  }
}

export default ViewCakesTableUser;
