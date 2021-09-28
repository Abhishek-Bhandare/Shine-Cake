import axios from "axios";

const CAKE_API_BASE_URL = "http://localhost:8087/GetData";

class customerservice {
  cakescomplaint(regid) {
    return axios.get(CAKE_API_BASE_URL + "/" + regid);
  }

  

  deleteCustomerData(regid) {
    return axios.delete(CAKE_API_BASE_URL + "/" + regid);
  }
}

export default new customerservice();

// axios.get(`https://cors-anywhere.herokuapp.com/https://www.api.com/`)

