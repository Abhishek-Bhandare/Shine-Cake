import axios from "axios";

const CAKE_API_BASE_URL = "http://localhost:8087/complaints";

class complaintservice {
  cakescomplaint(cakeId) {
    return axios.get(CAKE_API_BASE_URL + "/" + cakeId);
  }

  

  deleteComplaint(id) {
    return axios.delete(CAKE_API_BASE_URL + "/" + id);
  }
}

export default new complaintservice();

// axios.get(`https://cors-anywhere.herokuapp.com/https://www.api.com/`)

