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
            `\`DXB`,
            `SHA`,
            `SIN`
          ],
          "duration": 748
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T03:25:00.000Z`,
          "stops": [],
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
          "stops": [],
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
    },
    {
      "price": 62511,
      "carrier": `EK`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T08:31:00.000Z`,
          "stops": [
            `SHA`,
            `IST`,
            `AUH`
          ],
          "duration": 683
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T05:01:00.000Z`,
          "stops": [],
          "duration": 1864
        }
      ]
    },
    {
      "price": 70812,
      "carrier": `EY`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T11:44:00.000Z`,
          "stops": [
            `IST`
          ],
          "duration": 645
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T16:47:00.000Z`,
          "stops": [
            `SIN`,
            `SHA`
          ],
          "duration": 1162
        }
      ]
    },
    {
      "price": 69671,
      "carrier": `SU`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T08:41:00.000Z`,
          "stops": [
            `DXB`
          ],
          "duration": 928
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T16:36:00.000Z`,
          "stops": [
            `SHA`,
            `AUH`
          ],
          "duration": 1563
        }
      ]
    },
    {
      "price": 39248,
      "carrier": `FV`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T07:02:00.000Z`,
          "stops": [
            `DXB`
          ],
          "duration": 706
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T06:38:00.000Z`,
          "stops": [
            `AUH`,
            `HKG`
          ],
          "duration": 870
        }
      ]
    },
    {
      "price": 56229,
      "carrier": `SU`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T11:33:00.000Z`,
          "stops": [
            `AUH`
          ],
          "duration": 1259
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T12:33:00.000Z`,
          "stops": [
            `DXB`
          ],
          "duration": 1844
        }
      ]
    },
    {
      "price": 35874,
      "carrier": `MH`,
      "segments": [
        {
          "origin": `MOW`,
          "destination": `HKT`,
          "date": `2021-03-02T02:14:00.000Z`,
          "stops": [
            `BKK`
          ],
          "duration": 909
        },
        {
          "origin": `HKT`,
          "destination": `MOW`,
          "date": `2021-03-22T17:04:00.000Z`,
          "stops": [
            `HKG`,
            `DXB`
          ],
          "duration": 778
        }
      ]
    },
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
