const axios = require('axios');
const fs = require('fs');

const data = {
  companyName: "Rakshitgupta",
  clientID: "adebe1e0-d8df-4962-9dfb-08e0005731e7",
  clientSecret: "aaUxSZLceNjtpMHE",
  ownerName: "Rakshit",
  ownerEmail: "guptarakshit9858@gmail.com",
  rollNo: "2021a1r050"
};

axios.post('http://20.244.56.144/test/auth', data)
  .then(response => {
    fs.writeFile('auth.json', JSON.stringify(response.data, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Response saved to auth.json');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
