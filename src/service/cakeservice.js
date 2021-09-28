import axios from "axios";

const CAKE_API_BASE_URL = "http://localhost:8087/cakedata";

class cakeservice {
  cakesid(cakeId) {
    return axios.get(CAKE_API_BASE_URL + "/" + cakeId);
  }

  updateCake(data) {
    // return axios.put(`http://localhost:8087/cakedata/34`, {
    //   headers: {
    //     "Content-Type": "application/json", withCredentials:true
    //   },
    // });
    fetch("http://localhost:8087/cakedata", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",  
      },
      body: data
    })
      .then((response) => "Success response")
      .catch((error) => {
        throw error;
        // console.log("Error:", error);
        // this.handleFailure();
      });
  }

  deleteCake(cakeId) {
    return axios.delete(CAKE_API_BASE_URL + "/" + cakeId);
  }
}

export default new cakeservice();

// axios.get(`https://cors-anywhere.herokuapp.com/https://www.api.com/`)
