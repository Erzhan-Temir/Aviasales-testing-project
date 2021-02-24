import axios from 'axios';

const API = {

  base: axios.create({
    baseURL: `https://front-test.beta.aviasales.ru`,
    timeout: 2000,
    headers: {"Content-type": `application/json`}
  }),

  getSearchId() {
    return this.base.get(`/search`);
  },

  getTickets(searchId) {
    return this.base.get(`tickets?searchId=${searchId}`);
  },
};

export default API;
