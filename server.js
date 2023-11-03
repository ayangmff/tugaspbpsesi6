const express = require("express");
const app = express();

const motoGPData = [
  {
    circuit: "losail",
    location: "qatar",
    winner: {
      firstName: "andrea",
      lastName: "dovizioso",
      country: "italy",
    },
  },
  {
    circuit: "autodromo",
    location: "argentina",
    winner: {
      firstName: "carl",
      lastName: "crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "spain",
    winner: {
      firstName: "valentino",
      lastName: "rossi",
      country: "italy",
    },
  },
  {
    circuit: "Mugello",
    location: "italy",
    winner: {
      firstName: "andrea",
      lastName: "dovizioso",
      country: "italy",
    },
  },
];

app.get("/", (req, res) => {
  res.json(motoGPData);
});

app.get("/country", (req, res) => {
  const countryData = {};
  for (const race of motoGPData) {
    const country = race.winner.country;
    if (!countryData[country]) {
      countryData[country] = [];
    }
    countryData[country].push(race);
  }
  res.json(countryData);
});

app.get("/name", (req, res) => {
  const nameData = {};
  for (const race of motoGPData) {
    const winnerName = `${race.winner.firstName} ${race.winner.lastName}`;
    if (!nameData[winnerName]) {
      nameData[winnerName] = [];
    }
    nameData[winnerName].push(race);
  }
  res.json(nameData);
});

app.use((req, res) => {
  res.status(400).send("Bad Request");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
