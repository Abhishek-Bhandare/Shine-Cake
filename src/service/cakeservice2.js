import axios from "axios";

const CAKE_API_BASE_URL = "http://localhost:8087/cakedata";

class cakeservice {
  cakesid(cakeId) {
    return axios.get(CAKE_API_BASE_URL + "/" + cakeId);
  }

  updateCake(cake, cakeId) {
    return axios.put(CAKE_API_BASE_URL + "/" + cakeId);
  }

  deleteCake(cakeId) {
    return axios.delete(CAKE_API_BASE_URL + "/" + cakeId);
  }
}

export default new cakeservice();

// axios.get(`https://cors-anywhere.herokuapp.com/https://www.api.com/`)

