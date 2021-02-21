const data = {
  tickets: [
    {
      "price": 65648,
      "carrier": `EK`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T04:07:00.000Z`,
          "stops": [
            `SIN`,
            `DXB`,
            `SHA`
          ],
          "duration": 1550
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-21T22:36:00.000Z`,
          "stops": [
            `HKG`,
            `AUH`,
            `BKK`
          ],
          "duration": 942
        }
      ]
    },
    {
      "price": 22392,
      "carrier": `TG`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T01:54:00.000Z`,
          "stops": [
            `DXB`,
            `SHA`,
            `SIN`
          ],
          "duration": 748
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T03:25:00.000Z`,
          "stops": [
          ],
          "duration": 1970
        }
      ]
    },
    {
      "price": 54080,
      "carrier": `EY`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T09:57:00.000Z`,
          "stops": [
          ],
          "duration": 699
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T05:49:00.000Z`,
          "stops": [
            `DXB`,
            `HKG`
          ],
          "duration": 1092
        }
      ]
    }
  ],
  stop: false
};


const API = {
  getTickets() {
    return new Promise((resolve) => {
      resolve(data);
    });
  }
};

export default API;
