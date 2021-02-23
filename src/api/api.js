import axios from 'axios';

const API = {

  base: axios.create({
    baseURL: `https://front-test.beta.aviasales.ru`,
    timeout: 2000,
    headers: {"Content-type": `application/json`}
  }),

  searchId: null,

  getSearchId() {
    return this.base.get(`/search`);
  },

  getTickets() {
    this.getSearchId()
      .then((response) => {
        this.searchId = response.data.searchId;
      });

    return this.base.get(`tickets?searchId=${this.searchId}`);
  },
};

export default API;
