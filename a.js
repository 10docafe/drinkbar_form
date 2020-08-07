const axios = require('axios');

const token = "wwwwregethte";
const a = async () => {
  const url =
    "https://script.google.com/macros/s/AKfycbwEralJ8lY_5ErR2rkE8e3Q38xH3aI1WH6ASbqXpQkoE_4E9qU/exec";
  const params = new URLSearchParams();
  params.append("token", token);
  params.append("drinks", ["Hcoffee", "ICDECOFFEE"])
  await axios
    .post(url, params)
    .catch((err) => console.log(err));
};
a();